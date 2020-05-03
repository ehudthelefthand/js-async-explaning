function saveUser() {
  return connect("mysql://root:password@localhost/db").then((conn) => {
    return conn.exec("insert into user (name) values (?)").then((result) => {
      return conn.close().then(() => {
        return result;
      });
    });
  });
}

const connection = {
  exec(cmd) {
    return new Promise((resolve, reject) => {
      console.log(`exec cmd: ${cmd}`);
      setTimeout(() => {
        resolve({ rowAffected: 1 });
        // reject("fail exec");
      }, 3000);
    });
  },
  close() {
    return new Promise((resolve, reject) => {
      console.log("closing db...");
      setTimeout(() => {
        resolve();
        // reject("fail close");
      }, 3000);
    });
  },
};

function connect(connStr) {
  return new Promise((resolve, reject) => {
    console.log(`connect with: ${connStr}`);
    setTimeout(() => {
      resolve(connection);
      // reject("fail connect");
    }, 3000);
  });
}

saveUser()
  .then((result) => {
    console.log("done save: ", result);
  })
  .catch((err) => {
    console.log("fail save: ", err);
  });
