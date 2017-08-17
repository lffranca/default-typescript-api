const env = {
    "development": {
        "username": "--user-database--",
        "password": "--password-database--",
        "database": "--database--",
        "host": "localhost",
        "port": 3306,
        "dialect": "mysql",
        "logging": true,
        "timezone": "America/Sao_Paulo"
    },
    "homologation": {
        "username": "--user-database--",
        "password": "--password-database--",
        "database": "--database--",
        "host": "--host-database--",
        "port": 3306,
        "dialect": "mysql",
        "logging": true,
        "timezone": "America/Sao_Paulo"
    },
    "production": {
        "username": "--user-database--",
        "password": "--password-database--",
        "database": "--database--",
        "host": "localhost",
        "port": 3306,
        "dialect": "mysql",
        "logging": false,
        "timezone": "America/Sao_Paulo"
    }
}

export default (() => env[process.env.NODE_ENV])()