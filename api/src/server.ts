import express from 'express';

const app = express();
app.use(express.json());

app.get('/status', (request, response) => {
  return response.status(200).json({ message: 'Up and running!' })
})

const PORT = process.env.EXPRESS_PORT || 3333;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🔥 Server running at http://localhost:${PORT}`);
});
