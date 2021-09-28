/* Copyright (C) 2021 ameer-kallumthodi.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
PIKACHU*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "Command Kazhinn Yanthankilum Eyuth muthe\n🙄🙄🙄"

if (Config.WORKTYPE == 'private') {

  Asena.addCommand({ pattern: 'leavest ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=Upe1Fp1lDAtX0ioPYLEPsSoX51i&text1=Pikachu&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Shadow*' })

  }));
}

else if (Config.WORKTYPE == 'public') {

  Asena.addCommand({ pattern: 'leavest ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=Upe1Fp1lDAtX0ioPYLEPsSoX51i&text1=Pikachu&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Shadow*' })

  }));

}
