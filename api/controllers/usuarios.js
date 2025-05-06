import { ObjectId } from "mongodb"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const insereUsuario = async(req, res) => {
    req.body.avatar = `https://ui-avatars.com/api?name=${req.body.nome.replace(/ /g,'+')}&background=F00&color=FFF`
    // criptografia da senha
    const salt = await bscrypt.genSalt(10) // 10 rodadas de processamento do hash
    req.body.senha = await bscrypt.hash(req.body.senha, salt)
    //salvando o usuário...
    const db = req.app.locals.db
    await db.collection('usuarios')
        .insertOne(req.body)
        .then(result => res.status(201).send(result)
        .catch(err => res.status(400).json(err))
    )
}