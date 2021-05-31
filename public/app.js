const status = document.getElementById('status');
const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

const fotoId = document.getElementById('foto')
const firstNameId = document.getElementById('firstName')
const secondNameId = document.getElementById('secondName')
const lastNameId = document.getElementById('lastName')
const facultyId = document.getElementById('faculty')
const groupId = document.getElementById('group')
const dateId = document.getElementById('date')


let ws
let nickname
// while(1) {
//     nickname = prompt('Как вас зовут?')
//     if(nickname !== '') {
        start()
//         break
//     }
//
// }
function start() {
    ws = new WebSocket('ws://192.168.0.104:3000')
}
function setStatus(value) {
    status.innerHTML = value;
}

function printMessage(data) {
    console.log('start')
    console.log(data)
    console.log('end')

    fotoId.innerHTML = `<img src="${data.img}"/>`

    firstNameId.innerHTML = data.firstName
    secondNameId.innerHTML = data.secondName
    lastNameId.innerHTML = data.lastName

    facultyId.innerHTML = data.faculty
    groupId.innerHTML = data.group
    dateId.innerHTML = data.date

    console.log(data.firstName)
    console.log(data.secondName)
    console.log(data.lastName)

    console.log(data.room)
    console.log(data.img)

    console.log(data.faculty)
    console.log(data.group)
    console.log(data.date)

    console.log('end')

    /*
    const li = document.createElement('li');
    li.innerHTML = value;
    */
}

form.addEventListener('submit', event => {
    event.preventDefault()
    let obj = {name: nickname, msg: input.value}
    console.log(obj)
    ws.send(JSON.stringify(obj))
    input.value = ''
})

ws.onopen = () => setStatus('ONLINE')

ws.onclose = () => setStatus('disc')

ws.onmessage = response => {
    printMessage(JSON.parse(response.data))
}