import express from "express";

/* Class to handle express server  */
export default class Server  {

    // Global variables
    public app: express.Application // Variable to save the express server
    public port:Number // App to set the listener port

    constructor(port:Number) {
        // Init variables
        this.port = port
        this.app = express()
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