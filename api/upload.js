// api/upload.js
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

module.exports = (req, res) => {
  const file = req.files.fileToUpload;
  const filename = uuidv4() + '_' + file.name;
  fs.writeFile(`./uploads/${filename}`, file.data, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error uploading file');
      return;
    }
    res.send(`File uploaded: ${filename}`);
  });
};
