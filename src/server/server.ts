import express from "express";
import cors from 'cors'


/* Class to handle express server  */
export default class Server  {

    // Global variables
    public app: express.Application // Variable to save the express server
    public port:Number // App to set the listener port

    constructor(port:Number) {
        // Init variables
        this.port = port
        this.app = express()
        // CORS Fixed
        var whitelist = ['http://localhost:3000', 'http://localhost']
        var corsOptions = {
        origin: function (origin:any, callback:any) {
            if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
            } else {
            callback(new Error('Not allowed by CORS'))
            }
        }
        }
        this.app.use(cors(corsOptions));
    
    }

    // Function to init class
    static init (port: Number) {
        return new Server( port );
    }

    // Start lisening server on port 
    start ( callback: Function ) {
        this.app.listen( this.port, callback() );
    }

}