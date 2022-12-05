import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CardsEntity } from './cards.entity';
import { MimeTypesEnum } from '../../../misc/enums/mime-types.enum';

@Entity('images')
export class ImagesEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int', nullable: true })
  width: number;

  @Column({ type: 'int', nullable: true })
  height: number;

  @Column({ type: 'enum', enum: MimeTypesEnum, nullable: false })
  mimeType: MimeTypesEnum;

  @Column({ type: 'bytea', nullable: true })
  buffer: Buffer;

  @OneToMany(() => CardsEntity, (card) => card.image)
  cards: CardsEntity[];
}
