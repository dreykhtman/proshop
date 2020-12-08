/* eslint-disable import/extensions */
import express from 'express';

import { admin, protect } from '../middleware/authMiddleware.js';
import {
  getProducts,
  getProductById,
  deleteProduct,
} from '../controllers/productController.js';

const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct);

export default router;
