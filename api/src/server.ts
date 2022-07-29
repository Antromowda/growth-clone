/* eslint-disable no-console */
import express from 'express';
import 'express-async-errors';

import routes from './routes/routes';

const app = express();

app.use(express.json());
app.use(routes);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error, request, response, next) => {
  console.log('🪛  Error Handler');
  console.log(error);

  response.sendStatus(500);
});

app.get('/status', (request, response) => response.status(200).json({ message: 'Up and running!' }));

const PORT = process.env.EXPRESS_PORT || 3333;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🔥 Server running at http://localhost:${PORT}`);
});
