import { Router } from 'express';

import diplomasRouter from './diploma.routes';

const routes = Router();

routes.use(diplomasRouter);

export default routes;
