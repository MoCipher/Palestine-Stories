import { Request, Response } from 'express';
import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthController {
    async signup(req: Request, res: Response) {
        const { username, password } = req.body;

        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({ username, password: hashedPassword });
            res.status(201).json({ message: 'User created successfully', user: newUser });
        } catch (error) {
            res.status(500).json({ message: 'Error creating user', error });
        }
    }

    async signin(req: Request, res: Response) {
        const { username, password } = req.body;

        try {
            const user = await User.findOne({ username });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
            res.status(200).json({ message: 'Signin successful', token });
        } catch (error) {
            res.status(500).json({ message: 'Error signing in', error });
        }
    }
}

export default new AuthController();