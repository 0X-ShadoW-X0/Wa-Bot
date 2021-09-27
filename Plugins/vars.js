const Shadow = require('../events');

const config = require('../config');

const Heroku = require('heroku-client');

const heroku = new Heroku({

    token: config.HEROKU.API_KEY

});

let baseURI = '/apps/' + config.HEROKU.APP_NAME;

   var l_dsc = ''

    var alr_on = ''

    var alr_off = ''

    var BGM_on = ''

    var BGM_off = ''

    if (config.LANG == 'EN') {

        l_dsc = 'turn on and turn of bgm. -bot owner command'

        BGM_on = 'bgm option turned on!'

        BGM_off = 'bgm option turned off'

    }

    if (config.LANG == 'ML') {

        l_dsc = 'turn on and turn of bgm. -bot owner command'        

        BGM_on = 'bgm option turned on'

        BGM_off = 'bgm option turned off'

    }

 else {

        l_dsc = 'turn on and turn of bgm. -bot owner command'

        BGM_on = 'bgm option turned on!'

        BGM_off = 'bgm option turned off'

    }

    Shadow.addCommand({pattern: 'bgm ?(.*)', fromMe: true, desc: l_dsc, usage: '.bgm on / off' }, (async (message, match) => {

        if (match[1] == 'off') {

                await heroku.patch(baseURI + '/config-vars', { 

                    body: { 

                        ['BGM_FILTER']: 'false'

                    } 

                });

                await message.sendMessage(BGM_off)

        } else if (match[1] == 'on') {

                await heroku.patch(baseURI + '/config-vars', { 

                    body: { 

                        ['BGM_FILTER']: 'true'

                    } 

                });

                await message.sendMessage(BGM_on)

        }

    }));
    
 var plk_desc = ''

 var BGM_ONE = ''

 var BGM_TWO = ''

    if (config.LANG == 'ML') {

      

      plk_desc = 'മറുപടി bgm മോഡ് മാറ്റാൻ'

      BGM_ONE = '𝐁𝐆𝐌 തരം ഒന്നാം മോഡിലേക്ക് മാറ്റി'

      BGM_TWO = '𝐁𝐆𝐌 തരം രണ്ടാം മോഡിലേക്ക് മാറ്റി'

    }

     else {

    

    plk_desc = 'change reply message BGM mode'

    BGM_ONE = '𝐁𝐆𝐌 𝐭𝐲𝐩𝐞 𝐜𝐡𝗮𝐧𝐠𝐞𝐝 𝐭𝐨 𝟭𝘀𝘁 𝐦𝐨𝐝𝐞'

    BGM_TWO = '𝐁𝐆𝐌 𝐭𝐲𝐩𝐞 𝐜𝐡𝗮𝐧𝐠𝐞𝐝 𝐭𝐨 𝟐𝐧𝐝 𝐦𝐨𝐝𝐞'

    }

 Shadow.addCommand({pattern: 'bgm ?(.*)', fromMe: true, desc: plk_desc, usage: '.bgm one / two' }, (async (message, match) => {

        if (match[1] == 'two') {

                await heroku.patch(baseURI + '/config-vars', { 

                    body: { 

                        ['CHANGE_BGM_TO']: 'two'

                    } 

                });

                await message.sendMessage(BGM_TWO)

        } else if (match[1] == 'one') {

                await heroku.patch(baseURI + '/config-vars', { 

                    body: { 

                        ['CHANGE_BGM_TO']: 'one'

                    } 

                });

                await message.sendMessage(BGM_ONE)

        }

    }));

    Shadow.addCommand({ pattern: 'sudo ?(.*)', fromMe: true, desc: 'changes sudo numbers', usage: '.sudo *your number*' }, (async (message, match) => {

        if (match[1] == '') return await message.sendMessage('NEED A NUMBER')

        await heroku.patch(baseURI + '/config-vars', {

            body: {

                ['SUDO']: match[1]

            }

        });

        await message.sendMessage("NEW SUDO UPDATED")

    }));

    Shadow.addCommand({ pattern: 'caption ?(.*)', fromMe: true, desc: 'changes all captions', usage: '.caption *Made by JulieMwol*' }, (async (message, match) => {

        if (match[1] == '') return await message.sendMessage('NEED cA CAPTION')

        await heroku.patch(baseURI + '/config-vars', {

            body: {

                ['ALL_CAPTION']: match[1]

            }

        });

        await message.sendMessage("NEW CAPTION UPDATED")

    }));

    Shadow.addCommand({ pattern: 'handlers ?(.*)', fromMe: true, desc: 'changes handlers', usage: '.handler ^[.!] ' }, (async (message, match) => {

        if (match[1] == '') return await message.sendMessage('NEED A CAPTION')

        await heroku.patch(baseURI + '/config-vars', {

            body: {

                ['HANDLERS']: match[1]

            }

        });

        await message.sendMessage("NEW HANDLER UPDATED")

    }));

    Shadow.addCommand({ pattern: 'botname ?(.*)', fromMe: true, desc: 'change your bot name', usage: '.botname *name* ' }, (async (message, match) => {

        if (match[1] == '') return await message.sendMessage('TYPE YOUR NEW BOT NAME')

        await heroku.patch(baseURI + '/config-vars', {

            body: {

                ['BOT_NAME']: match[1]

            }

        });

        await message.sendMessage("NEW BOT NAME UPDATED")

    }));   

    Shadow.addCommand({ pattern: 'theri  ?(.*)', fromMe: true, desc: 'change your theri commands', usage: '.theri command,command' }, (async (message, match) => {

        if (match[1] == '') return await message.sendMessage('TYPE YOUR NEW BOT NAME')

        await heroku.patch(baseURI + '/config-vars', {

            body: {

                ['THERI_LIST']: match[1]

            }

        });

        await message.sendMessage("THERI LIST UPDATED")

    }));

    Shadow.addCommand({ pattern: 'duration ?(.*)', fromMe: true, desc: 'changes bgm duration', usage: '.duration *9999999*' }, (async (message, match) => {

        if (match[1] == '') return await message.sendMessage('NEED A NUMBER')

        await heroku.patch(baseURI + '/config-vars', {

            body: {

                ['BGM_DURATION']: match[1]

            }

        });

        await message.sendMessage("NEW BGM DURATION UPDATED")

    }));
