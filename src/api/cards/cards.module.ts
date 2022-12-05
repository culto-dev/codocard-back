import { Module } from '@nestjs/common';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardsEntity } from './entities/cards.entity';
import { ImagesEntity } from './entities/images.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CardsEntity, ImagesEntity])],
  controllers: [CardsController],
  providers: [CardsService],
})
export class CardsModule {}
