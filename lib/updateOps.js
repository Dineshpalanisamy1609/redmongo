import chalk from "chalk"

const log = console.log;

export default {
    editOne: async (collection, filter, options) => {
        try {
            log(chalk.magenta('Inside edit one function'));
            let updatedDocument = await collection.updateOne(filter, options);
            log(updatedDocument);
        } catch (e) {
            log(chalk.red(e));
        }

    },
    editMany: async (collection, filter, options) => {
        try {
            log(chalk.magenta('Inside edit one function'));
            let updatedDocument = await collection.updateMany(filter, options);
            log(updatedDocument);
        } catch (e) {
            log(chalk.red(e));
        }
    }
}