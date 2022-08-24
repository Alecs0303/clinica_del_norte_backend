import {DataTypes} from 'sequelize'
import {db} from '../config/db.js'

export const device = db.define('Example',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    Nombre:{
        type:DataTypes.STRING,
    },
    Serie:{
        type:DataTypes.STRING,
    },
    Precinto:{
        type:DataTypes.INTEGER,
       }//,
    // Placa:{
    //     type:DataTypes.STRING,
    // },
    // Marca:{
    //     type:DataTypes.STRING,
    // },
    // Modelo:{
    //     type:DataTypes.STRING,
    // },
    // Ubicacion:{
    //     type:DataTypes.STRING,
    // },
    // FechaDeAdquisicion:{
    //     type:DataTypes.DATE,
    // },
    // VidaUtil:{
    //     type:DataTypes.STRING,
    // },
    // Repuestos:{
    //     type:DataTypes.BOOLEAN,
    // },
    // AunFabricado:{
    //     type:DataTypes.BOOLEAN,
    // }
}
)