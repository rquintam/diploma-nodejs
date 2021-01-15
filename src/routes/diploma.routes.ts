import { Router } from 'express';

import CreateDiplomaService from '../services/CreateDiplomaService';

const diplomasRouter = Router();

diplomasRouter.get('/', (request, response) => {
  return response.json({ ok: true });
})


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

export default diplomasRouter;
