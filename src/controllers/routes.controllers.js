import {device} from '../models/Device.js'

// Con este controlador se obtienen los datos de la db
export const getRoutes = async(req,res) =>{
    const Device = await device.findAll()
    res.json(Device)
}

// Con este controlador se crea un dispositivo 
export const createRoute = async(req,res) =>{
    const {Nombre,Serie,Precinto} = req.body
    const dataDevice = await device.create({
        Nombre,
        Serie,
        Precinto
    })
    res.send('DeviceCreated')
}