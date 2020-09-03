import * as express from "express";

const app = express();

app.get("*", (req, res) => {
	res.send({
		result: "Ok"
	});
});

app.listen(8087, "0.0.0.0");
