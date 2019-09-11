import "reflect-metadata";
import { createKoaServer } from "routing-controllers";
import AdvController from "./adv/adv-controller";
import setupDb from "./db";

const port = process.env.PORT || 4000;

const app = createKoaServer({
  cors: true,
  controllers: [AdvController]
});

setupDb()
  .then(_ => app.listen(port, () => console.log(`Listening on port ${port}`)))
  .catch(err => console.error(err));
