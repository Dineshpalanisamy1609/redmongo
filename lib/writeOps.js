import chalk from "chalk";
import { database } from "./activate_db.js";

export default {

    writeOne: async (collection, data, options) => {
        try {
            console.log(chalk.magenta('Inside write one ops'));
            let savedData = await collection.insertOne(data, options);
            console.log(chalk.underline.green('Document insertion is successful'));
            console.log(savedData)
        } catch (e) {
            console.log(chalk.red(e));
        }
    },

    writeMany: async (collection, data, options) => {
        try {
            console.log(chalk.magenta('inside write many ops'));
            let savedData = await collection.insertMany(data, options);
            console.log(chalk.underline.green('Inserted multiple documents successfully'))
            console.log(savedData);
        } catch (e) {
            console.log(chalk.red(e));
        }
    }
}