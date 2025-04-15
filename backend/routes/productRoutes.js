
/**
 * Product Routes - Handles all API routes related to products
 * Includes functionality for cloning and updating products
 */

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { validateCloneProduct, validateUpdateProduct } = require('../middleware/validation');

// Route for cloning a product from one organization to another
router.post('/clone', validateCloneProduct, productController.cloneProduct);

// Route for updating an existing product
router.put('/update', validateUpdateProduct, productController.updateProduct);

// Route for getting list of organizations (for demo purpose)
router.get('/organizations', productController.getOrganizations);

// Route for getting products by organization ID
router.get('/by-organization/:orgId', productController.getProductsByOrganization);

module.exports = router;
