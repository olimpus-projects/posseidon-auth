import { Router } from 'express';
import { userRouter } from './user';
import { uTokenRouter } from './userToken';
import swagguerUi from 'swagger-ui-express';
import swaggerDocs from '../doc/swagger.json';

export const router = Router();

router.get('/health', (req, res) => {
    res.status(200).json({ message: 'Server is running' });
});
router.use('/docs', swagguerUi.serve as any, swagguerUi.setup(swaggerDocs) as any);
router.use(userRouter);
router.use(uTokenRouter);

