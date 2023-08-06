import { Module } from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { LanguagesController } from './languages.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Languages } from "./languages.model";

@Module({
  providers: [LanguagesService],
  controllers: [LanguagesController],
  imports: [
    SequelizeModule.forFeature([Languages])
  ],
})
export class LanguagesModule {}
