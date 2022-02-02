import chalk from 'chalk';

let log = console.log;
export default {
    aggregate: async (collection, pipeline) => {
        try {
            log(chalk.magenta('Inside aggregate'));
            let cursor = await collection.aggregate(pipeline);
            log(await cursor.toArray());
            log(chalk.green('Aggregation done successfully'))
        } catch (e) {
        }
    }
}