// clearInterval irá cancelar um setInterval registrado

const timeOut = 1000
const checking = () => console.log('checking!')

let interval = setInterval(checking, timeOut)

setTimeout(() => clearInterval(interval), 3000) // Cancela após 3 segundos
