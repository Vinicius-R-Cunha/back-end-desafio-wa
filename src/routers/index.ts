import { Router } from "express";
import filmRouter from "./filmRouter.js";

const router = Router();
router.use(filmRouter);

export default router;
