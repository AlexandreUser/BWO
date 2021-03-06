import minimist from 'minimist';
import extend from 'extend';

const args = minimist(process.argv.slice(2));

var envivoriment = args.env || 'development'
var reset_state = args.resetstate || false

var common_conf = {
    name: "Borderless World Online - MMO Game Server",
    version: "0.0.1",
    enviroment: envivoriment,
    max_players: 100,
    seed: "0"
}

//Enviroment Specific Configuration
var conf = {
    production:{
        ip: args.ip || "0.0.0.0",
        port: args.port || process.env.PORT || "3000",
        database_conf: {
            apiKey: process.env.FIREBASE_PRIVATE_API_KEY,
            authDomain: process.env.FIREBASE_AUTH_DOMAIN,
            databaseURL: process.env.FIREBASE_DATABASE_URL,
        }
    },
    development:{
        ip: args.ip || "0.0.0.0",
        port: args.port || "3000",
        database_conf: {
            apiKey: process.env.FIREBASE_PRIVATE_API_KEY,
            authDomain: process.env.FIREBASE_AUTH_DOMAIN,
            databaseURL: process.env.FIREBASE_DATABASE_URL,
        }
    },
}

extend(false, conf.production, common_conf)
extend(false, conf.development, common_conf)

const config = conf[envivoriment]
export default config;