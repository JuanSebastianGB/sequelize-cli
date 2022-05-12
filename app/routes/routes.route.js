import express, { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.json({ output: "From routes" });
});

export default router;