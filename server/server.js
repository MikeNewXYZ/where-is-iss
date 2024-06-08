import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
	try {
		const response = await fetch("http://api.open-notify.org/iss-now.json");
		const data = await response.json();
		const { latitude, longitude } = data.iss_position;

		res.status(200).send({
			latitude,
			longitude,
		});
	} catch (error) {
		res.status(404).send({ error });
	}
});

const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0");
