const express = require('express');
const blog_controller = require('../controllers/blogController');

const router = express.Router();

router.get('/', blog_controller.blog_index);

router.get('/create', blog_controller.blog_create_get);
router.post('/create', blog_controller.blog_create_post);

router.get('/:id', blog_controller.blog_details);
router.delete('/:id', blog_controller.blog_delete);

module.exports = router;