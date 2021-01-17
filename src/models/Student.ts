import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import Diploma from './Diploma';

@Entity('student')
class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  record_id: number;

  @Column()
  name: string;

  @OneToMany(() => Diploma, diploma => diploma.student)
  diploma: Diploma;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Student;
