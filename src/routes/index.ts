import { Router } from 'express';
import { userRouter } from './user';
import { uTokenRouter } from './userToken';


export const router = Router();

router.get('/health', (req, res) => {
    res.status(200).json({ message: 'Server is running' });
});
router.use(userRouter);
router.use(uTokenRouter);

