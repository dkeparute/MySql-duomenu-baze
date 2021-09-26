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

function printResults({ results, fields }) {
    if (Array.isArray(fields) && Array.isArray(results)) {
        let header = "";
        for (const field of fields) {
            header += field.name + "\t";
        }
        console.log(header);
        for (const row of results) {
            let rowStr = "";
            for (const field of fields) {
                rowStr += row[field.name] + "\t";
            }
            console.log(rowStr);
        }
    }
}

const conn = await connect();
const r = await query(conn, "select * from adresai");
printResults(r);
// console.log("results", results);
// console.log("fields", fields);
await end(conn);