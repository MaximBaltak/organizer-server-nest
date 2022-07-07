import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../database/entities/user.entity';
import { Task } from '../database/entities/task.entity';
import { Goal } from '../database/entities/goal.entity';
import { TaskOfGoal } from '../database/entities/task_of_goal.entity';
export const PostgreSqlConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  database: 'organizer',
  username: 'postgres',
  password: '111',
  port: 5432,
  host: 'localhost',
  synchronize: false,
  entities: [User, Task, Goal, TaskOfGoal],
};
