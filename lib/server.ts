import app from "./app";
import chalk from "chalk";

const port = 3030;

app.listen(port, () => {
  console.log(
    chalk.green(`Servidor esta sendo execultado na porta: ${port}`)
  );
});
