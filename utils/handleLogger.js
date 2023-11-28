const {IncomingWebhook}= require('@slack/webhook')
const {SLACK_WEBHOOK} = require('../config/vars')

const slackWebhook = new IncomingWebhook(SLACK_WEBHOOK)

const loggerStream = {
    write: message => {
        slackWebhook.send({
            text: message
        }).then(r => {})
    },
};

module.exports = loggerStream