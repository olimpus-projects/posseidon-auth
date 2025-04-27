import { Router } from 'express';
import { userRouter } from './user';
import { uTokenRouter } from './userToken';


export const router = Router();

router.use(userRouter);
router.use(uTokenRouter);

