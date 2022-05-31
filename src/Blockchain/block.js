
const SHA256 = require('crypto-js/sha256');
const hex2ascii = require('hex2ascii')
class Block{
    constructor(data){
        this.hash = null
        this.height = 0
        this.body = JSON.stringify(data).toString('hex')
        this.time = 0
        this.cedulas = []
        this.votes = 0
        this.previousBlockHash = ''
    }

    validate(){
        const self = this;
        return new Promise((resolve,reject) => {
            let currentHash = self.hash;
            self.hash = SHA256(JSON.stringify({... self, hash: null})).toString()
            if ( currentHash !== self.hash){
                return resolve(false)
            }
            resolve(true)
        })
    }

    getBlockData(){
        const self = this;
        return new Promise((resolve,reject) => {
            let encodedData = self.body
            let decodedData = hex2ascii(encodedData)
            let dataObject = JSON.parse(decodedData)

            if(dataObject === 'Genesis Block'){
                reject(new Error('This is the Genesis Block'))
            }

            resolve(dataObject)
        })
    }

    toString(){
        const {hash, height, body, time, previousBlockHash, votes, cedulas} = this
        return `Block - 
        hash: ${hash}
        height: ${height}
        body: ${body}
        time: ${time}
        previosBlockHash: ${previousBlockHash}
        votes: ${votes}
        cedulas: ${this.printCedulas()}
        --------------------------------------` 
    }

    printCedulas(){
        let out = ``
        for (let cedula of this.cedulas) {
            console.log(cedula)
            out = out.concat(`Cedula : ${cedula} \n`)
        }
        return out
    }

    addCedulas(cedula){
        this.cedulas.push(cedula)
    }

    getNumberCedulas(){
        return this.cedulas.length;
    }

    checkCedula(cedula){
        return this.cedulas.includes(cedula)
    }
}

module.exports = Block