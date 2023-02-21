const fse = require("fs-extra");

function moveFolder(srcDir, destDir) {
  try {
    fse.copySync(srcDir, destDir, { overwrite: true | false });
    console.log("success!");
  } catch (err) {
    console.error(err);
  }
}

module.exports = moveFolder;
