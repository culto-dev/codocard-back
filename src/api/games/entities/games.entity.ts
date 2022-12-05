import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UsersEntity } from '../../users/entities/users.entity';

@Entity('games')
export class GamesEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => UsersEntity, (user) => user.games)
  @JoinColumn({ name: 'userId' })
  user: UsersEntity;

  @Column({ type: 'int', default: 0, nullable: true })
  a: number;

  @Column({ type: 'int', default: 0, nullable: true })
  b: number;

  @Column({ type: 'int', default: 0, nullable: true })
  c: number;

  @Column({ type: 'int', default: 0, nullable: true })
  d: number;

  @Column({ type: 'int', default: 0, nullable: true })
  turn: number;

  @Column({ type: 'boolean', default: false, nullable: false })
  isFinished: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ nullable: true })
  finishedAt: Date;
}
