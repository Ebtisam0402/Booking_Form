// Import the express module
import express from 'express';

// Create an instance of an Express application
const app = express();


app.use(express.static('public'));

// Alllow the app to parse form data
app.use(express.urlencoded({extended: true}));

const dest = [];

// Define the port number where our server will listen
const PORT = 3009;

// Define a default "route" ('/')
// req: contains information about the incoming request
// res: allows us to send back a response to the client
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`); 
});

app.get('/confirm', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirm.html`); 
});

//Define a "submit" route
app.post('/submit', (req,res) => {
    
   res.sendFile(`${import.meta.dirname}/views/confirm.html`);  
});

// Start the server and make it listen on the port 
// specified above
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
}); 
