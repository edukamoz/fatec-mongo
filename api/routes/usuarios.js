import express from 'express'
import { efetuaLogin, insereUsuario } from '../controllers/usuarios.js'
import { validateUsuario } from '../middleware/validation.js'

const router = express.Router()
// Cria novo usuário
router.post('/', validateUsuario, insereUsuario)
// Validao  login
router.post('/login', efetuaLogin)

export default router