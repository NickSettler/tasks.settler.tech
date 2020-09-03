import * as express from "express";

const app = express();

app.get("*", (req, res) => {
	res.redirect("http://localhost:8080/");
});

app.listen(8087, "0.0.0.0");
