let fs = require("fs");
let path = require("path");
let glob = require("glob");
let handlebars = require("handlebars");
let flow = require("tinyflow");

let config = require("./config.js");

//Header object
let header = [];
header.push("//");
header.push("// WARNING: THIS FILE IS AUTO-GENERATED. DO NOT EDIT IT.");
header.push("// You can generate this file running the following command from the project root: ");
header.push("// $ npm run templates");
header.push("//");

//Function to compile the templates
let compileTemplates = function (folder, done) {
    return glob("./templates/" + folder + "/*.hbs", function(error, files){
        if(error) {
            return done(error);
        }
        flow.log("Compiling " + files.length + " files");
        let data = {colors: config.getColors(), header: header.join("\n")};
        for (let i = 0; i < files.length; i++) {
            let file = path.join(process.cwd(), files[i]);
            let fileObject = path.parse(file);
            flow.log("Compiling file " + file);
            try {
                let content = fs.readFileSync(file, "utf8");
                 //Compile the test file
                let template = handlebars.compile(content);
                //Output file path
                let outputDir = path.join(process.cwd(), folder);
                let output = path.format({dir: outputDir, name: fileObject.name, ext: ""});
                flow.log("Saving compiled test to " + output);
                fs.writeFileSync(output, template(data), "utf8");
            } catch (error) {
                return done(error);
            }
        }
        //Compile finished
        return done();
    });
};

//Generate the scss files 
flow.task("generate:scss", function (done) {
    return compileTemplates("scss", function (error) {
        return done(error);
    });
});

//Generate the test files
flow.task("generate:test", function(done){
    return compileTemplates("test", function(error){
        return done(error);
    });
});

//Define default tasks 
flow.defaultTask(["generate:scss", "generate:test"]);

