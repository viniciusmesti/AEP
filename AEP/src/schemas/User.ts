// 32 importando o Schema e model do mongoose
import { Schema, model, Document } from 'mongoose'

//33 - Criando uma constante que será o esquema da "tabela" User no nosso banco
const UserSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String
}, {
    // adiciona os campos createdAt e updatedAt
    timestamps: true
})

// 34 exportando UserSchema como uma Model que se chama User
export default model('User', UserSchema)
