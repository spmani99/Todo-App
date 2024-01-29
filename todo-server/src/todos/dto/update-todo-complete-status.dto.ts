import { IsBoolean, IsNotEmpty } from 'class-validator';

export class UpdateTodoCompleteStatusDto {
    @IsNotEmpty()
    @IsBoolean()
    isCompleted: boolean;
}
