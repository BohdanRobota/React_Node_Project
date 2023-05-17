import { IsNotEmpty, Length, IsBoolean, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty({ message: 'The Todo should have a title' })
  @Length(3, 255)
  @IsString()
  title: string;

  @IsNotEmpty({ message: 'The Todo should have a title' })
  @Length(5)
  @IsString()
  description: string;

  @IsBoolean()
  isComplete: boolean;

  @IsBoolean()
  isPrivate: boolean;
}
