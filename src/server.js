import express from "express";
import { config } from "dotenv";
import cors from "cors"; // Importa o middleware CORS

import animesRouter from "./routes/animeRoutes.js";
import collectionRouter from "./routes/collectionRoutes.js";
import personagemController from "./controllers/personagemController.js";

config(); // Carrega variáveis de ambiente do arquivo .env
const port = process.env.PORT || 4001; // Define a porta do servidor

// Inicializa o Express
const app = express();
app.use(cors()); // Habilita CORS para todas as rotas

app.use(express.json()); // Parse de JSON

app.use("/animes", animesRouter); // Usar as rotas de animes
app.use("/colecoes", collectionRouter); // Usar as rotas de colecoes



// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
