
import { DataSource } from "typeorm"
import { User } from "../entity/User"
import "reflect-metadata"
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "pgsql_hangry",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    entities: [User],
    synchronize: true,
    logging: false,
})


