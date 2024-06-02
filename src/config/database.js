//sequelize cli não entende import e exports, por isso não será utilizado
module.exports= {
    dialect:'postgres',
    host:'localhost',
    username:'postgres',
    password:'postgres',
    database:'codeBurger',
    define:{
        timespamps:true,
        underscored:true,
        underscoredAll:true,

    },
}