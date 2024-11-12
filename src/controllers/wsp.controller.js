import twilio from "twilio";
import { config } from "dotenv";
config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const phone = process.env.PHONE_FROM
const contentSid = process.env.CONTENTSID 
const client = twilio(accountSid, authToken);

const sendWspTwilio = async (req, res) => {
    try {
        const data = req.body;
        const message = await client.messages.create({
          contentSid:contentSid,
          contentVariables: JSON.stringify({ 1: `${data.solped}`, 2 : `${data.url}` }),
          from: 'whatsapp:' + phone,
          to:  'whatsapp:' + data.phone,
        });
        res.status(200).json({ message: 'Message sent successfully', sid: message.sid }); 
    } catch (error) {
        res.status(500).json({ message: 'Unexpected server error', error: error.message });
    }
};

export default sendWspTwilio;