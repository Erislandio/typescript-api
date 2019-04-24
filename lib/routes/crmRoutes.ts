import { Request, Response } from "express";

export class Routes {
  public routes(app): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "Hello word"
      });
    });

    app.route("/contact").get((req: Request, res: Response) => {
      res.status(200).send({ message: "Resquet GET ok " });
    });

    app.route("/contact").post((req: Request, res: Response) => {
      res.status(200).send({ message: "Route POST OK" });
    });

    app.route("/contact").put((req: Request, res: Response) => {
      res.status(200).send({ message: "PUT method ok" });
    });

    app.route("/contact").delete((req: Request, res: Response) => {
      res.status(200).send({ message: "Delete method ok" });
    });
  }
}
