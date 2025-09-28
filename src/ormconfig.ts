import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'devuser',
  password: '1234',
  database: 'blog',
  // Correct pattern pour TypeORM
  entities: [__dirname + '/**/*.entity.{ts,js}'],
  synchronize: true, // Ne pas utiliser en production, privilégier les migrations
};

export default config;
