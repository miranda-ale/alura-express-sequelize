const dotenv = require("dotenv").config();
const app = require("./src/app.js");

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Servidor escutando na Porta ${port}!`);
	console.log(`http://localhost:${port}`);
});
