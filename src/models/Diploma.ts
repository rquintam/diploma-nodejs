import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import CSV from './CSV';
import Student from './Student';

@Entity('diploma')
class Diploma {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  student_id: string;

  @ManyToOne(() => Student, student => student.diploma, { eager: true })
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @Column()
  course: string;

  @Column('date')
  date_end_program: Date;

  @Column()
  book: number;

  @Column()
  page: number;

  @Column()
  authorized_representative: string;

  @Column('date')
  date_pickup: Date;

  @Column()
  csv_id: string;

  @ManyToOne(() => CSV, csv => csv.diploma, { eager: true })
  @JoinColumn({ name: 'csv_id' })
  csv: CSV;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Diploma;
