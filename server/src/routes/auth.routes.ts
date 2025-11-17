import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import { validateSignUp, validateSignIn } from '../utils/validators';

const router = Router();
const authController = new AuthController();

router.post('/signup', validateSignUp, authController.signUp);
router.post('/signin', validateSignIn, authController.signIn);

export default router;