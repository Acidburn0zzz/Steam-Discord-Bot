const config = require("../config.json");

function defaultTo(key, value, conf = config) {
    if (!conf.hasOwnProperty(key)) {
        conf[key] = value;
    }
}

defaultTo("steamOptions", {})
defaultTo("steamLogon", {})
defaultTo("botChannel", "bot");
defaultTo("receiveTyping", true);
defaultTo("sendTyping", true);
defaultTo("logging", true);
defaultTo("bindConfigPath", __dirname + "/../bindconfig");
defaultTo("dataDirectory", __dirname + "/../steamdata", config.steamOptions);

module.exports = config;
