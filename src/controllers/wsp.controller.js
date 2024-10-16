import twilio from "twilio";
import { config } from "dotenv";
config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const sendWspTwilio = async (req, res) => {
    try {
        const data = await req.json();
        const message = await client.messages.create({
          body: data.message,
          from: "+14252797504",
          to: data.phone,
        });
        console.log(message.sid);  
    } catch (error) {
        res.status(500).json({ message: 'Unexpected server error', error: error.message });
    }
};

export default sendWspTwilio;