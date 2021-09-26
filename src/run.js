// cia padarome jog info perkeliama pagal module standarta
import * as mysql from "mysql";

// cia padarome prisijungima prie duomenu bazes
const OPTIONS = {
    host: 'localhost',
    user: 'zmones',
    password: 'zmones',
    database: 'zmones'
};
// sukuriama funkcija connect , kuri grazins promisa resolve ir reject. Cia darome tam kad butu galima naudoti async/await
function connect() {
    return new Promise((resolve, reject) => {
        let conn = mysql.createConnection(OPTIONS);
        conn.connect(err => {
            if (err) {
                reject(err);
                return;
            }
            resolve(conn);
        });
    });
}

function query(conn, sql, params) {

    return new Promise((resolve, reject) => {
        conn.query()
    });
}

// reikia sitos bibliotekos info perrasyti i funkcijas, kurios naudotusi promise'sais:
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

connection.end();