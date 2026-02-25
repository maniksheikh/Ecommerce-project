const express = require('express');
const router = express.Router();
const getMongoConnection = require('../../services/mongo-crud');
const { ObjectId } = require('mongodb');

// Get all products
router.get('/', async (req, res, next) => {
    try {
        const { client, db } = await getMongoConnection();
        const products = await db.collection('products').find({}).toArray();
        await client.close();
        res.json({ success: true, data: products });
    } catch (error) {
        next(error);
    }
});

// Get single product
router.get('/:id', async (req, res, next) => {
    try {
        const { client, db } = await getMongoConnection();
        const product = await db.collection('products').findOne({ _id: new ObjectId(req.params.id) });
        await client.close();
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        res.json({ success: true, data: product });
    } catch (error) {
        next(error);
    }
});

// Create product
router.post('/', async (req, res, next) => {
    try {
        const { client, db } = await getMongoConnection();
        const result = await db.collection('products').insertOne(req.body);
        await client.close();
        res.status(201).json({ success: true, data: { ...req.body, _id: result.insertedId } });
    } catch (error) {
        next(error);
    }
});

// Update product
router.put('/:id', async (req, res, next) => {
    try {
        const { client, db } = await getMongoConnection();
        const result = await db.collection('products').updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: req.body }
        );
        await client.close();
        if (result.matchedCount === 0) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        res.json({ success: true, message: 'Product updated successfully' });
    } catch (error) {
        next(error);
    }
});

// Delete product
router.delete('/:id', async (req, res, next) => {
    try {
        const { client, db } = await getMongoConnection();
        const result = await db.collection('products').deleteOne({ _id: new ObjectId(req.params.id) });
        await client.close();
        if (result.deletedCount === 0) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        res.json({ success: true, message: 'Product deleted successfully' });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
