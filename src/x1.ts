import { show } from './x2';
import * as express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Hello'));

app.listen(3000, () => console.log('Started'));