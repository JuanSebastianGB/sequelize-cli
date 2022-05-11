import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
const app = express();

// Settings
const PORT = process.env.PORT || 3000;

// Middleware
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(morgan('tiny'));

// Routes
app.get('/', (req, res) => {
    res.send('Hello world');
});



// Starting Server
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
