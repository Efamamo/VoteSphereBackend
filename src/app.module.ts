import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { GroupModule } from './group/group.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeORM/entities/user';
import { Group } from './typeORM/entities/group';
import { Poll } from './typeORM/entities/poll';
import { PollOption } from './typeORM/entities/pollOption';
import { PollModule } from './poll/poll.module';
import { Vote } from './typeORM/entities/vote';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    GroupModule,
    PollModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-cro4e2m8ii6s73f2nij0-a',
      port: 5432,
      username: 'efa',
      password: '35povI3KOCE3iiBPi9dpuebOJOnYkam6',
      database: 'votesphere',
      autoLoadEntities: true,
      entities: [User, Group, PollOption, Poll, Vote],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
