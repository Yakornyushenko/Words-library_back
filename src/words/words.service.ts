import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Words } from "./words.model";
import { CreateWordDto } from "./dto/create-word.dto";

@Injectable()
export class WordsService {

  constructor(@InjectModel(Words) private wordRepository: typeof Words) {
  }

  async createWord(dto: CreateWordDto) {
    return await this.wordRepository.create(dto);
  }

  async getWords(categoryId: number) {
    return this.wordRepository.findAll({ where: { categoryId } });
  }
}
