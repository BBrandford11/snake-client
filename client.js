const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });
  conn.on("connect", () => {
    // code that does something when the connection is first established
    conn.write("Name: BB");
    console.log("YO you connected");
    
  });
  // conn.on("connect", () => {
  //   // code that does something when the connection is first established
  //   // conn.write("Move: up");
  //   // setTimeout(() => {
  //   //   conn.write("Move: up");
  //   // }, 2000)
  //   // setInterval(() => {
  //   //   conn.write("Move: up");
  //   // }, 50)
    
  // });
  conn.on("data", (sent) => {
    
    console.log(sent);

  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;
