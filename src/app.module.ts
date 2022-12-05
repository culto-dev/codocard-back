import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './api/users/users.module';
import { AuthModule } from './api/auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { UsersEntity } from './api/users/entities/users.entity';
import { CardsModule } from './api/cards/cards.module';
import { OutcomesModule } from './api/outcomes/outcomes.module';
import { CardsEntity } from './api/cards/entities/cards.entity';
import { OutcomesEntity } from './api/outcomes/entities/outcomes.entity';
import { GamesModule } from './api/games/games.module';
import { GamesEntity } from './api/games/entities/games.entity';
import { ImagesEntity } from './api/cards/entities/images.entity';
import { SequencesEntity } from './api/sequences/entities/sequences.entity';
import { SequencesModule } from './api/sequences/sequences.module';
import { SubsequencesEntity } from './api/sequences/entities/subsequence.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '0.0.0.0',
      port: 5432,
      username: 'codocard',
      password: 'codocard',
      database: 'codocard',
      synchronize: true,
      entities: [
        UsersEntity,
        CardsEntity,
        OutcomesEntity,
        GamesEntity,
        ImagesEntity,
        SubsequencesEntity,
        SequencesEntity,
      ],
    }),
    PassportModule,
    AuthModule,
    UsersModule,
    CardsModule,
    OutcomesModule,
    GamesModule,
    SequencesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
