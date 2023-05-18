const server = require("./src/server");
const { Character, Film, Planet } = require("./src/database/index");
const PORT = 8004;
Film.list().then((res) => console.log(res));
server.listen(PORT, () => {
  console.log(`listening in PORT ${PORT}`);
});
