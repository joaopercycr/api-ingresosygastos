import {Router} from 'express'
import Task from '../models/Task'

const router = Router()

router.get('/', async (req, res)=>{
    const tasks = await Task.find()
    console.log(tasks)
})

router.post('/', async(req,res) =>{
    const newTask = new Task({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        activo: req.body.activo
    })
    await newTask.save()
    console.log(newTask)
    res.json('guardando valor')
})
export default router