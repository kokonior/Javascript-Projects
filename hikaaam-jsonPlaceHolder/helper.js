const fs = require("fs");

const save = (name, data) => {
  const ts = Date.now();
  const filename = `${name}-${ts}.json`;
  fs.writeFileSync("./storage/" + filename, JSON.stringify(data));
  return {
    filename,
    url: getUrl(filename),
  };
};

const getDirList = () => {
  const files = [];
  fs.readdirSync("./storage").forEach((file) => {
    files.push(file);
  });
  return files;
};

const getJsonContent = (filename) => {
  let rawdata = fs.readFileSync("./storage/" + filename);
  let data = JSON.parse(rawdata);
  return data;
};

const getUrl = (filename) => {
  return "http://127.0.0.1:" + 3000 + "/" + filename;
};

module.exports = {
  save,
  getDirList,
  getJsonContent,
  getUrl
};
