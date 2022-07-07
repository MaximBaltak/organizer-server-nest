import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
@Entity()
export class Task {
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
  @Column()
  border: string;
  @Column()
  check: boolean;
}
