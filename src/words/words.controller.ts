import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { WordsService } from "./words.service";
import { Words } from "./words.model";
import { CreateWordDto } from "./dto/create-word.dto";

@ApiTags("Words")
@Controller("words")
export class WordsController {

  constructor(private wordsService: WordsService) {
  }

  @ApiOperation({ summary: "Создание слова" })
  @ApiResponse({ status: 200, type: Words })
  @Post()
  create(@Body() dto: CreateWordDto) {
    return this.wordsService.createWord(dto);
  }

  @ApiOperation({ summary: "получение всех слов по id категории" })
  @ApiResponse({ status: 200, type: Words })
  @Get("/:value")
  getAll(@Param("value") categoryId: number) {
    return this.wordsService.getWords(categoryId);
  }
}
