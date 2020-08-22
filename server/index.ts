import express from "express";

const PORT = 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.listen(PORT, () => console.log(`server listening in port ${PORT}`));
