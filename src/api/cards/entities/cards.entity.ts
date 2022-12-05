import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OutcomesEntity } from '../../outcomes/entities/outcomes.entity';
import { ImagesEntity } from './images.entity';
import { SubsequencesEntity } from '../../sequences/entities/subsequence.entity';

@Entity('cards')
export class CardsEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  text: string;

  @OneToMany(() => OutcomesEntity, (outcome) => outcome.card)
  outcomes: OutcomesEntity[];

  @ManyToOne(() => ImagesEntity, (image) => image.cards)
  image: ImagesEntity;

  @OneToMany(() => SubsequencesEntity, (subsequence) => subsequence.card)
  subsequences: SubsequencesEntity[];
}
