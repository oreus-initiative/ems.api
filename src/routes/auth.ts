import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();

router.post('/register', (req: Request, res: Response, next: NextFunction) => {
    
});

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.render('index', { title: 'Split API', message: "Auth" });
});

export default router;