const {program} = require('commander');
const fs = require ('fs');

program
    .command("count")
    .description("Count the number of lines in a document")
    .argument("<file>" , "file to read" )
    .action((file) => {
        fs.readFile(file , "utf-8" , (err, data)=>{
            if(err){
                console.log(err)
            }
            else{
                const lines = data.split("\n").length
                console.log(`There are ${lines} lines in the file ${file}`);
            }
        });
});

program.parse();