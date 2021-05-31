const WebSocket = require('ws')
const mongoose = require('mongoose')
const Resident = require('./models/Resident')
const http = require('http')

async function start() {
    mongoose.connect("mongodb+srv://zxcursed:zxcursed@cluster0.z7n4h.mongodb.net/Resident?retryWrites=true&w=majority",
    {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: true
        });
    // console.log(await Resident.findById('60b361ff5ca4ea8fb14e671d').lean())
    async function drop(id){
        let data = await Resident.findById(id).lean()
        // console.log(data)
        return data
    }
    const server = new WebSocket.Server({port: 3000})
    server.on('connection', (ws)  => {
        console.log('New Connection')
        ws.on('message', data => {
            let {msg: id} =  JSON.parse(data)
            // console.log(id)
            drop(id).then((user) => {
                    console.log(user)
                    server.clients.forEach(client => {
                        if (client.readyState === WebSocket.OPEN) {
                            client.send(JSON.stringify(user))
                        }
                    })
                }
            )
        })
    })

}
start()
