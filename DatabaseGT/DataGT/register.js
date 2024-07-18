const fs = require('fs')
const crypto = require('crypto')

/**
 * GET db
**/
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))

/**
 * GET random user from db
 * return {string}
**/
const getRegisteredRandomId = () => {
    return _registered[Math.floor(Math.random() * _registered.length)].id
}
const NamaKamu = (sender) => {
            let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].name
            }
        }      
const UmurKamu = (sender) => {
            let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].age
            }
        }              
const delRegister = (sender, amount) => {
            let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].id -= id
                fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
            }
        }
/**
 * add user to db
 * @param {String} userId 
 * @param {String} name 
 * @param {String} age 
 * @param {String} time 
 * @param {String} serial 
**/
const addRegisteredUser = (userid, name, age, time, serials) => {
    const obj = { id: userid, name: name, age: age, time: time, serial: serials }
    _registered.push(obj)
    fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}

/**
 * GET random serial
 * params {number} size
 * return {string}
**/
const createSerial = (size) => {
    return crypto.randomBytes(size).toString('hex').slice(0, size)
}

/**
 * cek user from db
 * params {string} userid
 * return {true/false}
**/
const checkRegisteredUser = (userid) => {
    let status = false
    Object.keys(_registered).forEach((i) => {
        if (_registered[i].id === userid) {
            status = true
        }
    })
    return status
}

module.exports = {
	getRegisteredRandomId,
	addRegisteredUser,
	delRegister,
	createSerial,
	checkRegisteredUser,
	NamaKamu,
	UmurKamu
}