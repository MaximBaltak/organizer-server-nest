import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgreSqlConfig } from './config/database.config';
import { AuthController } from './controllers/auth/auth.controller';
import { TasksController } from './controllers/tasks/tasks.controller';
import { GoalsController } from './controllers/goals/goals.controller';
import { ProfileController } from './controllers/profile/profile.controller';
import { ConfirmController } from './controllers/confirm/confirm.controller';
import { User } from './database/entities/user.entity';
import { Task } from './database/entities/task.entity';
import { Goal } from './database/entities/goal.entity';
import { TaskOfGoal } from './database/entities/task_of_goal.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(PostgreSqlConfig),
    TypeOrmModule.forFeature([User, Task, Goal, TaskOfGoal]),
  ],
  controllers: [
    AppController,
    AuthController,
    TasksController,
    GoalsController,
    ProfileController,
    ConfirmController,
  ],
  providers: [AppService],
})
export class AppModule {}
