const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
});

export const connect = () => connection.connect();
export const use = () => query('USE maxistock;');

export const query = (sql) => {
    return new Promise( (resolve, reject) => {
        connection.query(sql, (err, rows) =>{
            if (err) return reject(err);
            resolve(rows)
        });
    });
}

export const disconnect = () => connection.end();

