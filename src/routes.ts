import { Request, Response, Router } from 'express';

import logger from '@middlewares/logger';

const route = Router();

route.get('/hello', (_req: Request, res: Response) => {
  logger.info(`Request recebida`);
  res.json({message: 'Hello World'});
});

export default route;


