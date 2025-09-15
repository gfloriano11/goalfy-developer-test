import mysql from 'mysql2';

function getConnection(){
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'goalfy'
    });

    return connection;
};

function endConnection(connection){
    connection.end((error) => {
        if(error){
            throw new Error('Can not end connection');
        }
    })
}

export default {
    getConnection,
    endConnection
};