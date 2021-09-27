/* Copyright (C) 2021 Shadow
Shadow v2
*/

const Asena = require('../events');

const config = require('../config');

const Heroku = require('heroku-client');

const heroku = new Heroku({

    token: config.HEROKU.API_KEY

});

let baseURI = '/apps/' + config.HEROKU.APP_NAME;

   var wel_dsc = ''

    var alr_pp = ''

    var alr_gif = ''

    var WEL_pp = ''

    var WEL_gif = ''

    if (config.LANG == 'EN') {

        wel_dsc = 'You can select welcome as gif/pp. -owner command'

        WEL_pp = '```sᴜᴄᴄᴇssғᴜʟʟʏ sᴇᴛ ᴡᴇʟᴄᴏᴍᴇ ᴛʏᴘᴇ ᴘᴘ```'

        WEL_gif = '```sᴜᴄᴄᴇssғᴜʟʟʏ sᴇᴛ ᴡᴇʟᴄᴏᴍᴇ ᴛʏᴘᴇ ɢɪғ```'

    }

    Asena.addCommand({pattern: 'setwel ?(.*)', fromMe: true, desc: wel_dsc, usage: '.setwel pp / gif' }, (async (message, match) => {

        if (match[1] == 'gif') {

                await heroku.patch(baseURI + '/config-vars', { 

                    body: { 

                        ['WELCOME']: 'gif'

                    } 

                });

                await message.sendMessage(WEL_gif)

        } else if (match[1] == 'pp') {

                await heroku.patch(baseURI + '/config-vars', { 

                    body: { 

                        ['WELCOME']: 'PP'

                    } 

                });

                await message.sendMessage(WEL_pp)

        }

    }));
