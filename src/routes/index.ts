import { Router } from 'express';
import { registerController } from './useCases/Register';
import { loginController } from './useCases/Login';
import { logoutController } from './useCases/Logout';
import { getuserController } from './useCases/getUser';
import { authController } from './useCases/middleware/Auth';

const router = Router();

router.get('/', (request, response) => {
    return response.status(200).json({ message: 'Server ON' });
});



export { router }