
import { Schema, model } from "mongoose"

interface UserInterface {
    avatar: string
    firstName: string
    lastName: string
    email: string
    password: string
    verified: boolean
    createdAt: Date
}

const schema = new Schema<UserInterface>({
    avatar: { type: String, default: null },
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },
    email: { type: String, required: true },
    password: { type: String },
    verified: { type: Boolean, default: false },
    createdAt: { type: Date, required: true },
})

const UserModel = model<UserInterface>('User', schema)

export default UserModel