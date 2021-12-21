import {config} from 'dotenv'
config()

export default{
    mongoConfigUser: process.env.MONGOUSER,
    mongoConfigPassword: process.env.MONGOPASSWROD,
}