const qaDev = require('./qa.env')
const preDev = require('./pre.env')
console.log(process.env.NODE_ENV)
let currentDev = {}
if(process.env.NODE_ENV === 'test'){
    currentDev = qaDev
}else if(process.env.NODE_ENV === 'production'){
    currentDev = preDev
}else if(process.env.NODE_ENV === 'development'){
    currentDev = qaDev
}

export default currentDev