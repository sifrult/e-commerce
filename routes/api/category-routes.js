const router = require('express').Router();
const { Category, Product } = require('../../models');

// find all categories
router.get('/', async (req, res) => {
  try {
    const productData = await Category.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(productData);
  } catch(err) {
    res.status(500).json(err);
  }
});

// find one category by its `id` value
router.get('/:id', async (req, res) => {
  try {
    const productData = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    });

  if (!productData) {
    res.status(400).json({message: 'No product found with this id!'});
    return;
  }

  res.status(200).json(productData);
  } catch(err) {
    res.status(500).json(err);
  }
});

// create a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
