import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import * as Joi from "joi";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DbModule } from "./db/db.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid("development", "production", "test", "provision")
          .default("development"),
        PORT: Joi.number().port().default(3000),
        DB_HOST: Joi.string().default("db"),
        DB_USER: Joi.string().default("user"),
        DB_PASSWORD: Joi.string().default("password"),
        DB_NAME: Joi.string().default("tp-docker-db"),
      }),
      validationOptions: {
        allowUnknown: false,
        abortEarly: true,
      },
    }),
    DbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
