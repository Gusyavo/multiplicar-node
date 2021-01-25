const fs = require('fs');

const crearArchivo = (base, limit) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`Base ${base} is not a number`);
            return;
        }
        if (!Number(limit)) {
            reject(`Limit ${limit} is not a number`);
            return;
        }
        let data = '';
        for (let index = 1; index < limit + 1; index++) {
            data += `${base} * ${index} = ${base*index}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-limit${limit}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`Se creó un archivo de nombre tablas/tabla-${base}-limit${limit}.txt`)
        });
    });
}

const listarTabla = (base, limit) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`Base ${base} is not a number`);
            return;
        }
        if (!Number(limit)) {
            reject(`Limit ${limit} is not a number`);
            return;
        }
        let data = '';
        for (let index = 1; index < limit; index++) {
            data += `${base} * ${index} = ${base*index}\n`;
        }
        resolve(data)
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}