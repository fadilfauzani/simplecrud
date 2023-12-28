import { serveServer } from "./server/server";
import { AppDataSource } from "./data/connection";

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
serveServer()