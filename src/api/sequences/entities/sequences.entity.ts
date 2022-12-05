import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SubsequencesEntity } from './subsequence.entity';

@Entity('sequences')
export class SequencesEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => SubsequencesEntity, (subsequence) => subsequence.sequence)
  subsequences: SubsequencesEntity[];
}
