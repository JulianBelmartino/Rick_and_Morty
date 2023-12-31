const express = require('express')
const morgan = require('morgan')
const router = require('./routes/index.js')
const cors = require('cors')
const { conn } = require('./DB_connection');


const server = express()
const PORT = 3001

//const KEY = '?henrym-{JulianBelmartino}'
//const URL = 'https://rickandmortyapi.com/api/'

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
        );
        res.header(
            'Access-Control-Allow-Methods',
            'GET, POST, OPTIONS, PUT, DELETE'
            );
            next();
        });
        
        
        server.use(morgan('dev'))
        server.use(cors())
        server.use(express.json());
        
        server.use('/rickandmorty', router);
        
        
        conn.sync({force: true})

        server.listen(PORT, () => {
            console.log('Hello ' +PORT)
        })