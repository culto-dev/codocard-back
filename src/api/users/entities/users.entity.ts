import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GamesEntity } from '../../games/entities/games.entity';

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ unique: true, nullable: false })
  login: string;

  @Column({ nullable: false })
  passwordHash: string;

  // player properties

  @Column({ nullable: true })
  organizationTitle: string;

  @OneToMany(() => GamesEntity, (game) => game.user)
  games: GamesEntity[];
}
