import chalk from "chalk";

const log = console.log;
export default {
    removeOne: async (collection, filter, options) => {
        try {
            log(chalk.magenta('Inside removeOne function'));
            let deletedResult = await collection.deleteOne(filter, options);
            log(deletedResult);
        } catch (e) {
            log(chalk.red(e));
        }
    },
    removeMany: async (collection, filter, options) => {
        try {
            log(chalk.magenta('Inside removeMany function'));
            let deletedResult = await collection.deleteMany(filter, options);
            log(deletedResult);
        } catch (e) {
            log(chalk.red(e));
        }
    }
}