import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ message: "hello wolrd"})
})

app.listen(3333, () => {
  console.log('vrum')
})