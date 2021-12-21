import express from 'express'
import TaskRoutes from './routes/tasksRoutes'
const app = express();

//setting
app.set('port', process.env.PORT || 3000)

app.use(express.json())

//routes
app.get('/', (req, res)=>{
    res.json({message:'Hola mundio'})
})
app.use('/v1/tasks',TaskRoutes)

export default app