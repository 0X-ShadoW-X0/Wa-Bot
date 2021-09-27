//Coded By Shadow

const { Sequelize } = require('sequelize');

const fs = require('fs');

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

//Spark Shadow
//Shadow v2

function convertToBool(text, fault = 'true') {

    return text === fault ? true : false;

}

module.exports = {

OA_NAME: process.env.Z_DEP_NAME === undefined ? 'Shadow' : process.env.Z_DEP_NAME,

PHONE: process.env.NUMBER === undefined ? '919526808481' : process.env.NUMBER,

OB_NAME: process.env.Z_BOT_NAME === undefined ? 'Shadow' : process.env.Z_BOT_NAME,

OA_REPLY: process.env.Z_DEP_REPLY === undefined ? 'you typed Shadow , he is my creator' : process.env.Z_DEP_REPLY,

VERIFY: process.env.VERIFICATION_CAPTION === undefined ? '```ᴄᴏᴅᴇᴅ ʙʏ sʜᴀᴅᴏᴡ```' : process.env.VERIFICATION_CAPTION,

};
