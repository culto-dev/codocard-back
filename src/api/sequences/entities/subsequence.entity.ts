import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SequencesEntity } from './sequences.entity';
import { CardsEntity } from '../../cards/entities/cards.entity';

@Entity('subsequences')
export class SubsequencesEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int', nullable: false })
  orderNumber: number;

  @ManyToOne(() => CardsEntity, (card) => card.subsequences)
  card: CardsEntity;

  @ManyToOne(() => SequencesEntity, (sequence) => sequence.subsequences)
  @JoinColumn({ name: 'sequenceId' })
  sequence: SequencesEntity;
}
