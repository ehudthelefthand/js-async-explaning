async function saveUser() {
  try {
    const conn = await connect("mysql://root:password@localhost/db");
    const result = await conn.exec("insert into user (name) values (?)");
    await conn.close();
    return result;
  } catch (e) {
    throw e;
  }
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

(async function () {
  try {
    const result = await saveUser();
    console.log(result);
  } catch (e) {
    console.error("fail save: ", e);
  }
})();
