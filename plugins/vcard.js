const SparkShadow= require('../events');

let fs = require('fs');

const Shadow = require('../shadow');

const Language = require('../language');

let {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

SparkShadow.addCommand({pattern: 'number', fromMe: false, desc: "get the original number of creator"}, (async (message, match) => {

            const spark_shadow = 'BEGIN:VCARD\n'

            + 'VERSION:3.0\n' 

            + 'FN:' + Shadow.OA_NAME + '\n' //created afnanplk, please copy this with credit..

            + 'ORG:owner contact card by Shadow bot;\n' 

            + 'TEL;type=CELL;type=VOICE;waid=' + Shadow.PHONE + ':' + Shadow.PHONE + ' \n'

            + 'END:VCARD'

await message.client.sendMessage(message.jid, {displayname: "Shadow", vcard: spark_shadow}, MessageType.contact);

            

}));
