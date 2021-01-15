import { getRepository } from 'typeorm';

import Diploma from '../models/Diploma';

interface Request {
  id: string;
  authorized_representative: string;
  date_pickup: Date;
}

class PickupDiplomaService {
  public async execute({
    id,
    authorized_representative,
    date_pickup,
  }: Request): Promise<Diploma> {
    const diplomasRepository = getRepository(Diploma);

    const diploma = await diplomasRepository.findOne(id);

    if (!diploma) {
      throw new Error('Não foi possível encontrar o Diploma!');
    }

    diploma.authorized_representative = authorized_representative;
    diploma.date_pickup = date_pickup;

    await diplomasRepository.save(diploma);

    return diploma;
  }
}

export default PickupDiplomaService;
