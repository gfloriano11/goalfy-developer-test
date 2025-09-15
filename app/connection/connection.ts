import mysql from 'mysql2';

function getConnection(){
    const connection: mysql.Connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'goalfy'
    });

    return connection;
};

function endConnection(connection: mysql.Connection){
    connection.end((error: Error | null ) => {
        if(error){
            throw new Error('Can not end connection');
        }
    })
}

export default {
    getConnection,
    endConnection
};