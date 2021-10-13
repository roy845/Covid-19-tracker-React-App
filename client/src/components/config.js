const Pool = require ('pg').Pool;

const pool = new Pool({
        connectionString: process.env.DATABASE_URL || 
        'postgres://qtkiicponziuuy:9f660858b81609ac1edd62ff7a70b32cb2aa40cbce366464e09c05b5378068a2@ec2-3-222-24-200.compute-1.amazonaws.com:5432/d1tts93g76h36g',
        ssl: process.env.DATABASE_URL ? true : false
    })


    module.exports = pool;
