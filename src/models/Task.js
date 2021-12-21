import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    apellido: String,
    edad: Number,
    activo: Boolean,
},{
    versionKey: false,
    timestamps: true,
})

export default model('Task', taskSchema)