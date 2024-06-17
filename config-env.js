
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const username = fs.readFileSync('Kapsykay', 'utf8').trim()

module.exports = {
    SESSION_ID:  process.env.PRABATH-MD~eW4hAJJ#HFQT2ksz3jrj4t3NmpDe9BqtdCqg1pAg-DABQcA_uw,    
    BOT_NUMBER:  process.env.260776642930,
    GITHUB_USERNAME: Kapskay,
    GITHUB_AUTH_TOKEN: process.env.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,
};
