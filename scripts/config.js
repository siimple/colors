var utily = require("utily");
var pkg = require("../package.json");

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
    return utily.string.format(banner.join("\n"), pkg);
};

//Get the package version
module.exports.getVersion = function() {
    return pkg.version;
};
