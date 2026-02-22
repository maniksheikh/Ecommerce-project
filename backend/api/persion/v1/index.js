const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Person = require('../../../models/Person');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret';

// Register Person
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingPerson = await Person.findOne({ email });
        if (existingPerson) {
            return res.status(400).json({ message: 'Person with this email already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const person = new Person({ name, email, password: hashedPassword });
        await person.save();
        res.status(201).json({
            message: 'Person registered successfully',
            person: { name, email }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error registering person', error: error.message });
    }
});

// Login Person
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const person = await Person.findOne({ email });
        if (!person || !(await bcrypt.compare(password, person.password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const token = jwt.sign(
            { id: person._id, email: person.email },
            JWT_SECRET,
            { expiresIn: '24h' }
        );
        res.json({
            message: 'Login successful',
            token,
            person: { id: person._id, name: person.name, email: person.email }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
})

// Get Person Details
router.get('/details', async (req, res) => {
    try {
        const { email } = req.query;
        console.log(`Backend: Fetching details for email: ${email}`);
        if (!email) return res.status(400).json({ message: 'Email is required' });
        const person = await Person.findOne({ email });
        if (!person) {
            console.log(`Backend: Person not found for email: ${email}`);
            return res.status(404).json({ message: 'Person not found' });
        }
        console.log(`Backend: Person found: ${person.email}`);
        res.json(person);
    } catch (error) {
        console.error(`Backend: Error fetching person details: ${error.message}`);
        res.status(500).json({ message: 'Error fetching person details', error: error.message });
    }
});

// Update/Create Person Details (Param)
router.post('/param', async (req, res) => {
    try {
        const { email, ...details } = req.body;
        if (!email) return res.status(400).json({ message: 'Email is required' });
        const person = await Person.findOneAndUpdate(
            { email },
            { $set: details },
            { new: true, upsert: true }
        );
        res.json({ message: 'Person details updated successfully', person });
    } catch (error) {
        res.status(500).json({ message: 'Error updating person details', error: error.message });
    }
});

// Logout Person
router.post('/logout', (req, res) => {
    res.json({ message: 'Logged out successfully' });
});

module.exports = router;
