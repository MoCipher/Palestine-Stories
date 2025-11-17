import { body, validationResult } from 'express-validator';

export const validateSignup = [
    body('username').isString().notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

export const validateSignin = [
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').exists().withMessage('Password is required'),
];

export const validateStory = [
    body('title').isString().notEmpty().withMessage('Title is required'),
    body('content').isString().notEmpty().withMessage('Content is required'),
    body('media').optional().isArray().withMessage('Media must be an array'),
];

export const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};