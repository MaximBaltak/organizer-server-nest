import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Task } from './task.entity';
import { Goal } from './goal.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  username: string;
  @Column()
  password: string;
  @Column({ unique: true })
  email: string;
  @Column()
  confirmEmail: boolean;
  @OneToMany(() => Task, (task) => task.id)
  tasks: Task[];
  @OneToMany(() => Goal, (goal) => goal.id)
  goals: Goal[];
  @CreateDateColumn()
  dateCreated;
}
