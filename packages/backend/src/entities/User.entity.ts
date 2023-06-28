import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Todo } from './Todo.entity';
import { Token } from './Token.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column('boolean', { default: false })
  isActivated: boolean;

  @Column()
  activationLink: string;

  @OneToMany(() => Todo, (todo) => todo.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  todos: Todo[];

  @OneToOne(() => Token, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn()
  token: Token;

}
