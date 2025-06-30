const fs = require('fs');

module.exports = {
 config: {
 name: "givefile",
 aliases: ["file"],
 version: "1.0",
 author: "opu",
 countDown: 5,
 role: 0,
 description: "extract file",
 category: "owner",
 guide: "{pn} Write a file name"
 },

 onStart: async function ({ message, args, api, event }) {
 const permission = ["100093021476757"];
 if (!permission.includes(event.senderID)) {
 return api.sendMessage("⩸__ 🦆𝙰𝚛𝚎 𝚢𝚘𝚞 𝚌𝚛𝚊𝚣𝚢 𝙾𝚗𝚕𝚢 𝙾𝙿𝚄 𝚂𝙴𝙽𝚂𝙴 𝚙𝚎𝚛𝚖𝚒𝚜𝚜𝚒𝚘𝚗 𝚝𝚘 𝚞𝚜𝚎 𝚝𝚑𝚒𝚜 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜 𝙵𝚒𝚕𝚎. ⚠️", event.threadID, event.messageID);
 }

 const fileName = args[0];
 if (!fileName) {
 return api.sendMessage("🔰 provide a file name!", event.threadID, event.messageID);
 }

 const filePath = __dirname + `/${fileName}.js`;
 if (!fs.existsSync(filePath)) {
 return api.sendMessage(`File not found: ${fileName}.js`, event.threadID, event.messageID);
 }

 const fileContent = fs.readFileSync(filePath, 'utf8');
 api.sendMessage({ body: fileContent }, event.threadID);
 }
};
