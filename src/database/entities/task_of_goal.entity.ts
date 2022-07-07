import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Goal } from './goal.entity';
@Entity()
export class TaskOfGoal {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  title: string;
  @Column()
  check: boolean;
  @Column()
  color: string;
  @Column()
  showButton: boolean;
  @Column()
  borderColor: string;
  @ManyToOne(() => Goal, (goal) => goal.id)
  goal: Goal;
}
