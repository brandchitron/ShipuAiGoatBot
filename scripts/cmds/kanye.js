const axios = require("axios");
module.exports = {
  config: {
    name: "kanye",
    version: "1.0",
    author: "opu",
    countDown: 5,
    role: 0,
    shortDescription: { en: "Random Kanye West quote" },
    longDescription: { en: "Get a random Kanye West quote" },
    category: "𝗙𝗨𝗡 & 𝗚𝗔𝗠𝗘",
    guide: { en: "+kanye" }
  },

  onStart: async function({ message }) {
    try {
      const res = await axios.get("https://api.kanye.rest");
      const quote = res.data.quote;
      message.reply(`𝗞𝗮𝗻𝘆𝗲 𝘀𝗮𝘆𝘀:\n"${quote}"`);
    } catch {
      message.reply("❌ 𝗘𝗿𝗿𝗼𝗿 𝗴𝗲𝘁𝘁𝗶𝗻𝗴 𝗾𝘂𝗼𝘁𝗲.");
    }
  }
};
