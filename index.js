/**
 * @author NTKhang
 * ! The source code is written by NTKhang, please don't change the author's name everywhere. Thank you for using
 * ! Official source code: https://github.com/ntkhang03/Goat-Bot-V2
 * ! If you do not download the source code from the above address, you are using an unknown version and at risk of having your account hacked
 *
 * English:
 * ! Please do not change the below code, it is very important for the project.
 * It is my motivation to maintain and develop the project for free.
 * ! If you change it, you will be banned forever
 * Thank you for using
 *
 * Vietnamese:
 * ! Vui lòng không thay đổi mã bên dưới, nó rất quan trọng đối với dự án.
 * Nó là động lực để tôi duy trì và phát triển dự án miễn phí.
 * ! Nếu thay đổi nó, bạn sẽ bị cấm vĩnh viễn
 * Cảm ơn bạn đã sử dụng
 */

const express = require("express");
const path = require("path");
const { spawn } = require("child_process");
const log = require("./logger/log.js");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve 'chitron.html' when '/' is accessed
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "chitron.html"));
});

app.listen(PORT, () => {
  console.log(`Serving chitron.html at http://localhost:${PORT}`);
});
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

function startProject() {
  const child = spawn("node", ["Goat.js"], {
    cwd: __dirname,
    stdio: "inherit",
    shell: true
  });

  child.on("close", (code) => {
    if (code == 2) {
      log.info("Restarting Project...");
      startProject();
    }
  });
}

startProject();

