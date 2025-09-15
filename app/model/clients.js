import connect from "../connection/connection.js";

async function getClients(req, res){
    const connection = connect.getConnection();

    const query = `
        SELECT 
            id, fullname, email, phone, CNPJ, address
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

export default getClients;