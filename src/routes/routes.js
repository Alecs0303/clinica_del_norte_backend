import {Router} from 'express'
import {createRoute,getRoutes} from '../controllers/routes.controllers.js'

const router = Router()

// Ruta para obtener todos los dispositivos
router.get('/getdevice',getRoutes)

// Ruta para crear dispositivos
router.post('/createdevice',createRoute)

export default router