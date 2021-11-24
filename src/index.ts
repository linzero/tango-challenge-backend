/* Imports */
import Server from "./server/server"
import fibo from "./routes/routes";

const port:number = parseInt(process.env.PORT!) || 3001 //Define Port

const server:Server = Server.init( port ) // Create Server Object

server.app.use('/api/fibonacci',fibo); // Use Routes

server.start(() => {
    console.log(`App initialized on port ${port}`)
})