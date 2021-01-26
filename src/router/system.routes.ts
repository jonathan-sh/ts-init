import { Router, Request, Response } from 'express'

const routes = Router();
const path = '/system';

routes.get(`${path}/health`, (_: Request, res: Response) => {
    res.send(new Date());
});

export default routes