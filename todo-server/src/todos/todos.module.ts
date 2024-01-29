import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './entity/todo.entity';
import { TodosService } from './todos.service';

@Module({
    imports: [TypeOrmModule.forFeature([TodoEntity])],
    controllers: [TodosController],
    providers: [TodosService],
})
export class TodosModule {}
