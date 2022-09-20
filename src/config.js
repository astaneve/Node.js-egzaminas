require("dotenv").config();

module.exports = {
    port: process.env.PORT || 3000,
dbconfig: {
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_DATABASE,
   port: process.env.DB_PORT,
}
};