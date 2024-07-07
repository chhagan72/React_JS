const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/user/save', (req, res) => {
  // Mock save user logic
  console.log('Request Body:', req.body);
  res.status(200).send('User saved');
});

const PORT = 3306;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
