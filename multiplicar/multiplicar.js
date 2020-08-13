// required
const fs = require('fs');
const colors = require('colors');

const listarTabla = (base, limite) => {

    let data;

    console.log('============='.green);
    console.log(`tabla del: ${base}`.green);
    console.log('============='.green);

    for (let i = 1; i <= limite; i++) {
        data = base * i;
        console.log(`${base} * ${i} = ${data}`);
    }

}

const crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`la base '${base}' debe ser un numero`);
        } else {

            for (let i = 1; i <= limite; i++) {
                data += (`${base} * ${i} = ${base * i}\n`);

            }

            fs.writeFile(`tabla/tabla-${base}.txt`, data, (err) => {
                if (err) reject(err)
                else
                    resolve(`tabla-${base}.txt`.green);
            });
        }
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}