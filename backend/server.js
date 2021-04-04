import express from "express";

import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static("../client/dist"));

// Body Parser
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server started on port: ${port}`));
