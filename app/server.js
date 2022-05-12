import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import { connection } from './database/db.js';
import mainRoute from './routes/routes.route.js';
import userRoute from './routes/user.route.js';

const app = express();

// Settings
const PORT = process.env.PORT || 3000;

// Middleware
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(morgan('tiny'));

// Routes
app.get('/', (req, res) => {
    res.json({
        output: "hello world"
    })
});

app.use('/api/routes', mainRoute);
app.use('/api/users', userRoute);



// Starting Server
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);

    connection.sync({ force: false })
        .then(() => {
            console.log("connection set successfully");
        });
});

