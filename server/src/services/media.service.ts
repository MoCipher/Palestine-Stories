import { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';

// Configure storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory to save uploaded files
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Unique filename
  }
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

// Service to handle media uploads
class MediaService {
  static uploadMedia(req: Request, res: Response) {
    upload.single('media')(req, res, (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error uploading file', error: err });
      }
      return res.status(200).json({ message: 'File uploaded successfully', file: req.file });
    });
  }
}

export default MediaService;