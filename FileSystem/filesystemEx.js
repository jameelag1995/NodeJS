const fs = require("fs");

function callback(err) {
    if (err) throw err;
    console.log("Success!");
}

/* -------------------- creating a file with data inside -------------------- */
// fs.writeFileSync("notes.txt", "My name is Jameel.");

/* --------------------- adding data to an existing file -------------------- */

// fs.appendFileSync("notes.txt", "\nI'm a fullstack developer!", callback);

/* ------------------------------ copying file ------------------------------ */

// fs.copyFileSync("notes.txt", "notes-copy.txt", 0, callback);

/* ------------------------------ renaming file ----------------------------- */

// fs.renameSync("notes-copy.txt", "new-notes.txt", callback);

/* ------------------ creating directory files into a list ------------------ */

// const directoryFiles = fs.readdirSync("./", callback);
// console.log(directoryFiles);
// fs.writeFileSync(
//     "list-of-directory-files.txt",
//     directoryFiles.join("\n"),
//     callback
// );

/* ------------------------ adding and removing file ------------------------ */
// fs.writeFileSync("file-to-delete.txt", "file to delete!", callback);
// fs.unlinkSync("file-to-delete.txt", callback);
