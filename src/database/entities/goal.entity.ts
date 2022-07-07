import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { TaskOfGoal } from './task_of_goal.entity';
@Entity()
export class Goal {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne(() => User, (user) => user.id)
  user: User;
  @Column({ nullable: true })
  dataStart: string;
  @Column({ nullable: true })
  dataEnd: string;
  @Column('simple-json', { nullable: true })
  day: {
    text: string;
    color: string;
  };
  @Column('simple-json')
  state: {
    text: string;
    color: string;
  };
  @OneToMany(() => TaskOfGoal, (task) => task.id)
  tasks: TaskOfGoal[];
  @Column()
  percent: number;
  @Column()
  colorPercent: string;
  @Column()
  borderColor: string;
}
