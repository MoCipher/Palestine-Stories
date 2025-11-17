import { Request, Response, NextFunction } from 'express';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

export const uploadMiddleware = (req: Request, res: Response, next: NextFunction) => {
  upload.array('media')(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: 'Error uploading files' });
    }
    next();
  });
};