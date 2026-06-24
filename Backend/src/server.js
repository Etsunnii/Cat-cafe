import express from "express";

const app = express();
const port = process.env.PORT || 3001;

app.disable("x-powered-by");
app.use(express.json({ limit: "100kb" }));

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Kitty Corner API listening on port ${port}`);
});
