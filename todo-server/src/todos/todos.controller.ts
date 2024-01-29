import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoCompleteStatusDto } from './dto/update-todo-complete-status.dto';
import { TodoEntity } from './entity/todo.entity';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
    constructor(private todoService: TodosService) {}

    @Get()
    getTodos(): Promise<TodoEntity[]> {
        return this.todoService.getTodos();
    }

    @Post('create')
    createTodo(@Body() createTodoDto: CreateTodoDto) {
        return this.todoService.createTodo(createTodoDto);
    }

    @Put('update/:id')
    updateTodo(@Param('id') id: number, @Body() createTodoDto: CreateTodoDto) {
        return this.todoService.updateTodo(id, createTodoDto);
    }

    @Put('updateStatus/:id')
    updateTodoCompleteStatus(@Param('id') id: number, @Body() updateTodoCompleteStatus: UpdateTodoCompleteStatusDto) {
        return this.todoService.updateTodoCompleteStatus(id, updateTodoCompleteStatus);
    }

    @Delete('deleteAll')
    deleteTodos() {
        return this.todoService.deleteTodos();
    }

    @Delete('delete/:id')
    deleteTodo(@Param('id') id: number) {
        return this.todoService.deleteOneTodo(id);
    }

    @Delete('deleteDone')
    deleteCompletedTodos() {
        return this.todoService.deleteCompletedTodos();
    }
}
