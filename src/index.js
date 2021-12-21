import app from './app'
import './databse'

app.listen(app.get('port'), ()=>{
    console.log('ejecunatndo')
})