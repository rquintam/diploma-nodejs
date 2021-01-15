import { getRepository } from 'typeorm';

import Diploma from '../models/Diploma';
import Student from '../models/Student';

interface Request {
  record_id: number;
  name: string;
  course: string;
  date_end_program: Date;
  book: number;
  page: number;
}

class CreateDiplomaService {
  public async execute({
    record_id,
    name,
    course,
    date_end_program,
    book,
    page,
  }: Request): Promise<Diploma> {
    const studentsRepository = getRepository(Student);
    const diplomasRepository = getRepository(Diploma);

    let studentRecord = await studentsRepository.findOne({
      where: { record_id },
    });

    if (!studentRecord) {
      studentRecord = studentsRepository.create({
        record_id,
        name,
        course,
        date_end_program,
      });

      await studentsRepository.save(studentRecord);
    }

    const diploma = diplomasRepository.create({
      book,
      page,
      student: studentRecord,
    });

    await diplomasRepository.save(diploma);

    return diploma;
  }
}

export default CreateDiplomaService;
