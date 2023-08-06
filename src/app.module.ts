import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/user.model";
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { LanguagesModule } from './languages/languages.module';
import { Languages } from "./languages/languages.model";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Role, Languages],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    LanguagesModule,
  ],
  controllers: [AuthController],
  providers: [],
})
export class AppModule {}