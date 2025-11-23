const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    service: 'position-simulator'
  });
});

app.get('/api/status', (req, res) => {
  res.status(200).json({
    message: 'Position Simulator',
    version: '1.0.0',
    status: 'running'
  });
});

app.listen(PORT, () => {
  console.log(`Position simulator running on port ${PORT}`);
});

module.exports = app;