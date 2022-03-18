const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json()); // untuk baca req body json
app.use(express.urlencoded({ extended: false })); // untuk baca req body urlencoded

app.get('/products', function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for all origins!' });
});

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
