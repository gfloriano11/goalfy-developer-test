import connect from "../connection/connection.js";

async function getClients(req, res){
    const connection = connect.getConnection();

    const query = `
        SELECT 
            *
        FROM
            clients;
    `

    connection.query(query, (error, data) => {
        if(error){
            return res.status(500).json(error);
        }

        res.status(200).json(data);
    });

    connect.endConnection(connection);
}

async function createClient(req, res){
    const connection = connect.getConnection();

    const CEP = req.body.CEP;

    const addressInfo = await fetch(`https://viacep.com.br/ws/${CEP}/json`, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
    })

    const data = await addressInfo.json();

    const city = data.localidade;
    const state = data.estado;
    const UF = data.uf;
    const address = data.logradouro;
    const neighborhood = data.bairro;

    const values = [
        req.body.fullname,
        req.body.email,
        req.body.phone,
        req.body.CNPJ,
        address,
        city,
        state,
        UF,
        CEP,
        neighborhood
    ];

    const query = `
        INSERT INTO clients
        (fullname, email, phone, CNPJ, address, city, state, UF, CEP, neighborhood)
        VALUES
        (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `

    connection.query(query, values, (error, data) => {
        if(error){
            res.status(500).json(error);
        }

        res.status(200).json(data);
    })

    connect.endConnection(connection);
}

async function deleteClient(req, res){
    const connection = connect.getConnection();

    const clientId = req.params.id;

    const query = `
        DELETE FROM clients WHERE id = ?;
    `

    connection.query(query, clientId, (error, data) => {
        if(error){
            res.status(500).json(error);
        }

        res.status(200).json(data);
    });

    connect.endConnection(connection);
}

export default {
    getClients,
    createClient,
    deleteClient
};