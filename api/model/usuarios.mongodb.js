use('teste')
db.usuarios.insertOne({
    'nome': 'Maria José',
    'email': "mariajose@uol.com.br",
    'senha': '123Mudar',
    'ativo': true,
    'tipo': 'Cliente', // Ou Admin
    'avatar': 'https://ui-avatars.com/api?name=Maria+José&background=F00&color=FFF'
})
// Criando um índice único para o email

use('teste')
db.usuarios.createIndex({'email': 1}, {unique: true})

use('teste')
db.usuarios.find({}, {senha: 0})