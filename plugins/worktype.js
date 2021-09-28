/* Copyright (C) 2020 Shadow.
Shadow v2
*/

const Asena = require('../events');

const config = require('../config');

const Heroku = require('heroku-client');

const heroku = new Heroku({

    token: config.HEROKU.API_KEY

});

let baseURI = '/apps/' + config.HEROKU.APP_NAME;

 var W_PUB = ''

 var W_PRI = ''

 var W_ADM = ''

  if (config.LANG == 'EN') {

    
    l_dsc = 'WORK_TYPE Changer. -bot owner command'
      
    W_ADM = 'ᴡᴏʀᴋ ᴛʏᴘᴇ ɪꜱ ᴀᴅᴍɪɴ ɴᴏᴡ' 

    W_PUB = 'ᴡᴏʀᴋ_ᴛʏᴘᴇ ɪꜱ ɴᴏᴡ ᴘᴜʙʟɪᴄ'

    W_PRI = 'ᴡᴏʀᴋ_ᴛʏᴘᴇ ɪꜱ ɴᴏᴡ ᴘʀɪᴠᴀᴛᴇ'

    }

    if (config.LANG == 'ML') {

      
      l_dsc = 'WORK_TYPE Changer. -bot owner command'
        
      W_ADM = 'ᴡᴏʀᴋ ᴛʏᴘᴇ ɪꜱ ᴀᴅᴍɪɴ ɴᴏᴡ'

      W_PUB = 'ᴡᴏʀᴋ_ᴛʏᴘᴇ ɪꜱ ɴᴏᴡ ᴘᴜʙʟɪᴄ'

      W_PRI = 'ᴡᴏʀᴋ_ᴛʏᴘᴇ ɪꜱ ɴᴏᴡ ᴘʀɪᴠᴀᴛᴇ'

    }

 Asena.addCommand({pattern: 'work ?(.*)', fromMe: true, desc: l_dsc, usage: '.work private / public / admin' }, (async (message, match) => {

        if (match[1] == 'public') {

                await heroku.patch(baseURI + '/config-vars', { 

                    body: { 

                        ['WORK_TYPE']: 'public'

                    } 

                });

                await message.sendMessage(W_PUB)

        } else if (match[1] == 'private') {

                await heroku.patch(baseURI + '/config-vars', { 

                    body: { 

                        ['WORK_TYPE']: 'private'

                    } 

                });

                await message.sendMessage(W_PRI)

         } else if (match[1] == 'admin') {

                await heroku.patch(baseURI + '/config-vars', { 

                    body: { 

                        ['WORK_TYPE']: 'admin'

                    } 

                });

                await message.sendMessage(W_ADM)

        }

    }));
