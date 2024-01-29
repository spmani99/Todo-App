import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoCompleteStatusDto } from './dto/update-todo-complete-status.dto';

import { TodoEntity } from './entity/todo.entity';

@Injectable()
export class TodosService {
    constructor(
        @InjectRepository(TodoEntity)
        private todosRepository: Repository<TodoEntity>,
    ) {}

    async getTodos(): Promise<TodoEntity[]> {
        return await this.todosRepository.find();
    }

    async getOneTodo(id: number) {
        return await this.todosRepository.findOneBy({ id });
    }

    async getTodosByDueDate(dueDate: string) {
        return await this.todosRepository.findBy({ dueDate });
    }

    async createTodo(createTodoDto: CreateTodoDto) {
        return await this.todosRepository.save(createTodoDto);
    }

    async updateTodo(id: number,createTodoDto: CreateTodoDto) {
        return await this.todosRepository.update(id, createTodoDto);
    }

    async updateTodoCompleteStatus(id: number, updateTodoCompleteStatus: UpdateTodoCompleteStatusDto) {
        return await this.todosRepository.update(id, updateTodoCompleteStatus);
    }

    async deleteOneTodo(id: number) {
        return await this.todosRepository.delete({ id });
    }

    async deleteTodos() {
        return await this.todosRepository.clear();
    }

    async deleteCompletedTodos() {
        const todos = await this.todosRepository.findBy({ isCompleted: true });
        return await this.todosRepository.remove(todos);
    }
}
