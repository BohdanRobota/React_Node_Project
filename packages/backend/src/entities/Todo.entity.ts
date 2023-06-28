import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User.entity';

@Entity({ name: 'todo' })
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  isComplete: boolean;

  @Column()
  isPrivate: boolean;

  @ManyToOne(() => User, (user) => user.todos)
  @JoinColumn({ name: 'userId' })
  user: User;
}
