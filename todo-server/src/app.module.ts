import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoEntity } from './todos/entity/todo.entity';
import { TodosModule } from './todos/todos.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '*****',
            database: 'todo_database',
            entities: [TodoEntity],
            synchronize: true,
        }),
        TodosModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
