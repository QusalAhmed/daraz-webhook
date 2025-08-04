const express = require('express');
const router = express.Router();

const TelegramBot = require('node-telegram-bot-api');

const token = "5618872665:AAED7ikwYNQxFfZzWwR6B8-NVB3LKb5P-SA";
const bot = new TelegramBot(token, { polling: false });


const chatId = '1783177827';

const sellers = {
    "700526154781": "VERTICAL",
    "700509906069": "Village-Beside",
    "700684128188": "Byte Box",
    "700663472332": "Tech Tornado",
    "700676480564": "NEO Gadget",
    "700685584344": "Black Innovation",
    "700685424480": "Al Ikra",
    "700519308702": "Villagie Store",
    "700526097818": "PureEshop",
    "700541913475": "VIVIAN",
    "700553715017": "Fancy Dokan",
    "700770288050": "Digital Box",
    "700548357359": "NEO Store",
    "700873456658": "Jazakallah",
    "700873504471": "Jazakallah Store",
    "700525335339": "Aibak Products Seller"
};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/webhook', function(req, res, next) {
    // Handle the webhook request here
    console.log('Webhook received:', req.body);

    const seller_id = req.body.seller_id;
    const seller = sellers[seller_id] || "Unknown Seller";
    bot.sendMessage(chatId, seller)
        .then(() => console.log('Message sent'))
        .catch(err => console.error('Error:', err));

    // Respond to the webhook
    res.status(200).send('Webhook received successfully');
})

module.exports = router;
