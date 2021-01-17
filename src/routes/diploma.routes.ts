import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateDiplomaService from '../services/CreateDiplomaService';
import PickupDiplomaService from '../services/PickupDiplomaService';

import Diploma from '../models/Diploma';
import Student from '../models/Student';

const diplomasRouter = Router();

diplomasRouter.get('/', async (request, response) => {
  const { record_id } = request.query;

  const studentsRepository = getRepository(Student);
  const student = await studentsRepository.findOne({
    where: {
      record_id,
    },
  });

  if (!student) {
    return response
      .status(404)
      .json({ error: 'Nenhum diploma encontrado para' });
  }

  const diplomasRepository = getRepository(Diploma);
  const diplomas = await diplomasRepository.find({
    where: { student_id: student.id },
  });

  return response.json(diplomas);
});

diplomasRouter.post('/', async (request, response) => {
  const {
    record_id,
    name,
    course,
    date_end_program,
    book,
    page,
  } = request.body;

  const createDiploma = new CreateDiplomaService();

  const diploma = await createDiploma.execute({
    record_id,
    name,
    course,
    date_end_program,
    book,
    page,
  });

  return response.json(diploma);
});

diplomasRouter.put('/', async (request, response) => {
  const { id, authorized_representative, date_pickup } = request.body;

  const pickupDiploma = new PickupDiplomaService();

  const diploma = await pickupDiploma.execute({
    id,
    authorized_representative,
    date_pickup,
  });

  return response.json(diploma);
});

export default diplomasRouter;
