/*coded by Shadow*/

const Asena = require('../events');

const config = require('../config');

const Heroku = require('heroku-client');

const heroku = new Heroku({

    token: config.HEROKU.API_KEY

});

let baseURI = '/apps/' + config.HEROKU.APP_NAME;

   var l_dsc = ''

    var alr_on = ''

    var alr_off = ''

    var STICKER_on = ''

    var STICKER_off = ''

    if (config.LANG == 'EN') {

        l_dsc = 'turn on and turn of Sticker replay. -bot owner command'

        STICKER_on = 'Sticker replay option turned on!'

        STICKER_off = 'Sticker replay option turned off'

    }

    Asena.addCommand({pattern: 'stickermsg ?(.*)', fromMe: true, desc: l_dsc, usage: '.stickermsg on / off' }, (async (message, match) => {

        if (match[1] == 'off') {

                await heroku.patch(baseURI + '/config-vars', { 

                    body: { 

                        ['STICKER_REPLY']: 'false'

                    } 

                });

                await message.sendMessage(STICKER_off)

        } else if (match[1] == 'on') {

                await heroku.patch(baseURI + '/config-vars', { 

                    body: { 

                        ['STICKER_REPLY']: 'true'

                    } 

                });

                await message.sendMessage(STICKER_on)

        }

    }));
