"use strict"
import { MongoClient } from 'mongodb'
import chalk from 'chalk';

let dbname, database, client;

class DatabaseConnector {

    constructor(uri) {
        console.log(chalk.magenta('Inside db constructor'))
        this.uri = uri;
        this.log = console.log;
    }

    async activate(options) {
        try {
            this.log(chalk.magenta('Inside activator'))
            let validationResult = await this.uriValidator(this.uri)
            if (validationResult) {
                this.log(chalk.cyan('Connecting to mongodb...'))
                client = new MongoClient(this.uri, options);
                let db = await client.connect()
                dbname = db.db().databaseName;
                database = client.db(dbname);
                this.log(chalk.red('db name - ' + dbname))
                this.log(chalk.underline.green('Connection success :)'));
            }
            else {
                this.log(chalk.underline.red('invalid uri'));
            }
        } catch (err) {
            this.log(chalk.red(err));
        }
    }

    async uriValidator(uri) {
        if (typeof uri === 'string' && uri.substring(0, 7) === 'mongodb') {
            this.log(chalk.underline.green('Given uri is valid type. proceeding further process..'))
            return 1;
        }
        else {
            return 0;
        }
    }
}

export { DatabaseConnector as default, database }

