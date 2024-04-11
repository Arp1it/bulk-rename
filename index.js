const fs = require('node:fs');
const path = require('path');

const prompt = require('prompt-sync')();

const replaceThis = "\\barp\\b";  // \b is a word boundary marker
const replaceWith = "arpit";

const folder_name = prompt("Folder name (if you want to change current directory files name then click . and enter): ")
const user_input = prompt("Type anything for only preview else enter only: ")
const preview = Boolean(user_input)
// console.log(preview, typeof(preview))

// const folder = path.resolve(__dirname)
// console.log(folder)

try {
    const data = fs.readdir(folder_name, (err, data) => {
        console.log(data);

        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            let newfile = `${folder_name}/${item.replaceAll(new RegExp(replaceThis, 'g'), replaceWith)}`;

            // if (!preview) {
            if (preview == false) {
                fs.rename(`${folder_name}/${item}`, newfile, () => {
                    console.log("rename successful!")
                });
            }

            else{
                if(`${folder_name}/${item}` != newfile) {console.log(`${folder_name}/${item} will be renamed to ${newfile}`)};
            };

        };

    });

} catch (err) {
    console.error(err);
};