import express from 'express';
import router from './crosscuttingconcerns/routes';
import config from './crosscuttingconcerns/config';
const app = express();
app.use(express.json());
app.use(router);
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index', { answer: 42 });
});
app.listen(config.port);
export default app;
