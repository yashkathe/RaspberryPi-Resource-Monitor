import { Router } from 'express'

import { getRAMStats } from '../controllers/controllers'

const router = Router()

router.get("/ram", getRAMStats)

export default router