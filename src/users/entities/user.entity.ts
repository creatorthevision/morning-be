import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Topic } from '../../topics/entities/topic.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Topic, topic => topic.user)
  topics: Topic[];
} 