function saveUser(callback) {
  connect("mysql://root:password@localhost/db", function (conn) {
    conn.exec("insert into user (name) values (?)", function (result) {
      conn.close(function () {
        callback(result);
      });
    });
  });
}

const connection = {
  exec(cmd, callback) {
    console.log(`exec cmd: ${cmd}`);
    setTimeout(() => {
      callback({ rowAffected: 1 });
    }, 3000);
  },
  close(callback) {
    console.log("closing db...");
    setTimeout(() => {
      callback();
    }, 3000);
  },
};

function connect(connStr, callback) {
  console.log(`connect with: ${connStr}`);
  setTimeout(() => {
    callback(connection);
  }, 3000);
}

saveUser(function (result) {
  console.log("done save: ", result);
});
