let kofi = require("kofi");
let pkg = require("../package.json");
let colors = require("../colors.json");

//Generate the header
module.exports.getHeader = function() {
    let banner = [];
    banner.push("/**");
    banner.push(" * @name         {{ name }} v{{ version }}");
    banner.push(" * @description  {{ description }}");
    banner.push(" * @docs         {{ homepage }}");
    banner.push(" * @license      {{ license }}");
    banner.push("**/");
    banner.push(" ");
    banner.push(" ");
    return kofi.format(banner.join("\n"), pkg);
};

//Get the package version
module.exports.getVersion = function() {
    return pkg.version;
};

//Get the colors list
module.exports.getColors = function() {
    return colors;
};
