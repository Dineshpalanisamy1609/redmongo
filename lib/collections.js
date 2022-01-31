import { database } from './activate_db.js'
import chalk from 'chalk'

class Collection {
    constructor() {
        console.log(chalk.magenta('Inside collection constructor'));
        console.log(chalk.underline.greenBright('Database name - ' + database.databaseName));
    }

    collection(collName, options) {
        console.log(chalk.magenta('Inside createCollection'))
        const res = database.collection(collName, options);
        console.log(chalk.underline.green(collName + ' is created successfully'));
        return res;
    }

}

export default Collection;