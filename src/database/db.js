const DB = require('pg').Pool;
const pool = new DB({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Siganoff11',
    port: 5432,
});


const getWatches = (req, res) => {
    pool.query('SELECT * FROM rolex', (error, results) => {
        if(error) throw error;

        res.status(200).json(results.rows);
    })
}

const addWatch = (req, res) => {
    const {model, price} = req.body
    pool.query('INSERT INTO rolex(model, price) VALUES ($1, $2)', [model, price], (error, results) => {
        if (error) {
            throw error
          }
          res.status(201).send(`Rolex added  ${model}`)
    })
}


const deleteWatch = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('DELETE FROM rolex WHERE id = $1', [id], (error, resluts) => {
        if(error) throw error;
        res.status(200).send(`User deleted with ID: ${id}`);
    })
}



module.exports = {
    getWatches,
    addWatch,
    deleteWatch
}