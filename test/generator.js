let fs = require("fs");

let colors = ["navy", "green", "teal", "blue", "aqua","purple","pink","red","orange","yellow","brown","grey"];
let content = [];
colors.forEach(function(color){
    content.push("<" + "div class=\"color siimple--color-white\" align=\"center\">");
    content.push("<" + "div class=\"color-item siimple--bg-" + color + "-light\">" + color + "-light</div>");
    content.push("<" + "div class=\"color-item siimple--bg-" + color + "\">" + color + "</div>");
    content.push("<" + "div class=\"color-item siimple--bg-" + color + "-dark\">" + color + "-dark</div>");
    content.push("<" + "/div>");
});

fs.writeFileSync("./colors.txt", content.join("\n"), "utf8");
