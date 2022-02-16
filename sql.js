const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: "109.94.209.66",
  port:3306,
  user: "admin6247k",
  password: "lao6247K",
  database:"trainlist"
});
const update = () => {
  
  pool.getConnection()
      .then(conn => {
      
        conn.query("SELECT 1 as value")
          .then((rows) => {
            console.log(rows, "Successful Update!"); 
            return conn.query("UPDATE sokaT SET value = 13431 WHERE id=1;");
          })
          
      }).catch(err => {
        console.log(err);
      });
}

