import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todos')
export class TodoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    title: string;

    @Column({ nullable: false })
    description?: string;

    @Column({ nullable: false })
    dueDate: string;

    @Column({ default: false })
    isCompleted: boolean;
}
