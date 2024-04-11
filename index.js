const fs = require('node:fs');
const path = require('path');

const prompt = require('prompt-sync')();

const replaceThis = "\\barp\\b";  // \b is a word boundary marker
const replaceWith = "arpit";

const user_input = prompt("Type anything for only preview else enter only: ")
const preview = Boolean(user_input)
// console.log(preview, typeof(preview))

// const folder = path.resolve(__dirname)
// console.log(folder)

try {
    const data = fs.readdir("data", (err, data) => {
        console.log(data);

        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            let newfile = `data/${item.replaceAll(new RegExp(replaceThis, 'g'), replaceWith)}`;

            // if (!preview) {
            if (preview == false) {
                fs.rename(`data/${item}`, newfile, () => {
                    console.log("rename successful!")
                });
            }

            else{
                if(`data/${item}` != newfile) {console.log(`data/${item} will be renamed to ${newfile}`)};
            };

        };

    });

} catch (err) {
    console.error(err);
};