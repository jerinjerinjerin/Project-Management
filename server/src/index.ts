import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { Router } from 'express';
// ROUTE IMPORTS
import projectRoutes from './routes/projectRoutes'
import taskRoutes from './routes/taskRoutes'
import searchRoutes from './routes/searchRoutes'
import userRoutes from './routes/userRoutes'
import teamRoutes from './routes/teamRoutes'
// CONFIGUATIONS

dotenv.config()
const app = express()
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false,}));
app.use(cors());
const router = Router();
// ROUTES
router.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/projects', projectRoutes);
app.use('/tasks', taskRoutes);
app.use('/search', searchRoutes);
app.use('/users', userRoutes);
app.use('/teams', teamRoutes)

// SERVER

const port = Number(process.env.PORT) || 3000;

app.listen(port, "0.0.0.0", () => {
    console.log(`Server is running on port ${port}`);
})


