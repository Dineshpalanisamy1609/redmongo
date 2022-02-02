import DbConnector from './lib/activate_db.js';
import Collection from './lib/collections.js';
import readOps from './lib/readOps.js';
import writeOps from './lib/writeOps.js'
import editOps from './lib/updateOps.js';
import removeOps from './lib/removeOps.js';
import chalk from 'chalk';
import aggregateOps from './lib/aggregate.js';
import { Db } from 'mongodb';

let log = console.log;

async function run() {
    log(chalk.magenta('Inside run method'));
    await new DbConnector('mongodb://localhost:27017/newDb?maxPoolSize=20&w=majority').activate({
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const docs = [
        { stars: 3, categories: ["Bakery", "Sandwiches"], name: "Rising Sun Bakery" },
        { stars: 4, categories: ["Bakery", "Cafe", "Bar"], name: "Cafe au Late" },
        { stars: 5, categories: ["Coffee", "Bakery"], name: "Liz's Coffee Bar" },
        { stars: 3, categories: ["Steak", "Seafood"], name: "Oak Steakhouse" },
        { stars: 4, categories: ["Bakery", "Dessert"], name: "Petit Cookie" },
    ];

    let testCollection = new Collection().collection('restaurants');
    // await writeOps.writeOne(testCollection, { a: 1 });
    // await writeOps.writeMany(testCollection, [{ b: 1, c: 1 }, { d: 1, e: 1 }])
    // await readOps.searchOne(testCollection, {});
    // await readOps.searchMany(testCollection, {});
    // await editOps.editOne(testCollection, { a: 1 }, {$set:{ a: 2 }});
    // await editOps.editMany(testCollection, { a: 1 }, { $set: { a: 2 } });
    // await removeOps.removeOne(testCollection, { a: 2 });
    // await removeOps.removeMany(testCollection, { a: 2 });

    // await writeOps.writeMany(testCollection, docs);

    // const pipeline = [
    //     { $match: { categories: "Bakery" } },
    //     { $group: { _id: "$stars", count: { $sum: 1 } } }
    // ];

    // await aggregateOps.aggregate(testCollection, pipeline);


}

await run();
