import { all } from "../controllers/user.controller";
import { Router } from "express";
const router = Router();

router.get('/', all);

export default router;