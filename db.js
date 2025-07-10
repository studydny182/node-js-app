// db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'mycruddb.ctsaao2iigig.ap-southeast-3.rds.amazonaws.com',
  user: 'admin',
  password: 'Vic123tory!', // ganti sesuai konfigurasi kamu
  database: 'crud_app'
});

db.connect(err => {
  if (err) throw err;
  console.log('✅ Connected to MySQL');
});

module.exports = db;
