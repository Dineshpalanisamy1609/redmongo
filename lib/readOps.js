import chalk from "chalk";
import { database } from "./activate_db.js";

const log = console.log;
export default {
    searchOne: async (collection, filter, options) => {
        try {
            log(chalk.magenta('inside search one function'));
            let result = await collection.findOne(filter, options);
            console.log(result);
        } catch (e) {
            log(chalk.red(e));
        }
    },
    searchMany: async (collection, filter, options) => {
        try {
            log(chalk.magenta('inside search many function'));
            let cursor = await collection.find(filter, options);
            await cursor.forEach(log)
        } catch (e) {
            log(chalk.red(e));
        }
    }
}