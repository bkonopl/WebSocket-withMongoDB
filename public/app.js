const status = document.getElementById('status');
const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');
let ws
let nickname
while(1) {
    nickname = prompt('Как вас зовут?')
    if(nickname !== '') {
        start()
        break
    }

}
function start() {
    ws = new WebSocket('ws://192.168.0.110:3000')
}
function setStatus(value) {
    status.innerHTML = value;
}

function printMessage(value) {
    const li = document.createElement('li');
    li.innerHTML = value;
    messages.appendChild(li);
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
    printMessage(response.data)
}