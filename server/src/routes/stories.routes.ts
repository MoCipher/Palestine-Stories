import { Router } from 'express';
import { StoriesController } from '../controllers/stories.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { uploadMiddleware } from '../middlewares/upload.middleware';

const router = Router();
const storiesController = new StoriesController();

// Route to create a new story
router.post('/', authMiddleware, uploadMiddleware, storiesController.createStory);

// Route to get all stories
router.get('/', storiesController.getAllStories);

// Route to get a specific story by ID
router.get('/:id', storiesController.getStoryById);

// Route to update a story by ID
router.put('/:id', authMiddleware, uploadMiddleware, storiesController.updateStory);

// Route to delete a story by ID
router.delete('/:id', authMiddleware, storiesController.deleteStory);

export default router;