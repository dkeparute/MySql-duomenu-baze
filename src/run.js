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
                return reject(err);
            }
            resolve(conn);
        });
    });
}

function query(conn, sql, values) {
    return new Promise((resolve, reject) => {
        conn.query({
            sql,
            values
        }, (err, results, fields) => {
            if (err) {
                return reject(err);
            }
            resolve({ results, fields });
        });
    });
}
// sukuriama funkcija bandand atsijungti
function end(conn) {
    return new Promise((resolve, reject) => {
        conn.end(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

const conn = await connect();
const {results, fields} = await query(conn, "select 1 as vienas");
await end(conn);