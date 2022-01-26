import express, { Request, Response, NextFunction } from 'express';

import auth from "./auth";

const router = express.Router();

router.use('/auth', auth);

router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'Split API', message: "API" });
});

export default router;