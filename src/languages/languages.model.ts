import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface IContentModel {

}
interface ILanguageModel {
    name: string;
    content: string[];
    description: string;
}

@Table({tableName: "language"})
export class Languages extends Model<Languages, ILanguageModel> {

  @ApiProperty({example:'1', description: 'уникальный идентификатор языка'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({example:'1', description: 'типы'})
  @Column({ type: DataType.ARRAY, })
  content: number;

  @ApiProperty({example:'English', description: 'наименование секции языка'})
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({example:'переход с А2 на B1', description: 'назначение секции языка'})
  @Column({ type: DataType.STRING, allowNull: true })
  description: string;

  @ApiProperty({example:'21', description: 'id пользователя создашего языковой раздел'})
  @Column({ type: DataType.STRING, allowNull: false })
  readonly userId: number;
}