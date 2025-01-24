import { promises } from "dns";
import mongoose from "mongoose";

type Connection = {
    isConnected?: number;
}

const connection: Connection = {};

export default async function dbConnect():Promise<void>{
    if(connection.isConnected){
        console.log("database already connected");
        return;
    }

    try {
        
        const db = await mongoose.connect(process.env.MONGODB_URI || '');

        connection.isConnected = db.connections[0].readyState;
        console.log("database connected");
    } catch (error) {
        console.log("database connection failed");
        console.log(error);
        process.exit(1);
    }
}