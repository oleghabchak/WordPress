const { Client } = require('pg');

const client = new Client({
    user: 'vsbkbtzrykfmjd',
    host: 'ec2-18-203-64-130.eu-west-1.compute.amazonaws.com',
    database: 'dc0q53lqdh1p3p',
    password: 'd3e297657c483830458ed72ea387271035d4404fc353963076d3480654cb0659',
    port: 5432,
});

client.connect();

const query = `
CREATE TABLE users (
    email varchar,
    firstName varchar,
    lastName varchar,
    age int
);
`;
client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Table is successfully created');
    client.end();
});

