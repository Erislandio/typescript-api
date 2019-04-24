"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const chalk_1 = require("chalk");
const port = 3030;
app_1.default.listen(port, () => {
    console.log(chalk_1.default.green(`Servidor esta sendo execultado na porta: ${port}`));
});
//# sourceMappingURL=server.js.map