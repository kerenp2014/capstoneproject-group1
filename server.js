import express from 'express';

const server = express();

// Define the port number
const PORT = process.env.PORT || 9090;

// Basic route
server.get('/', (req, res) => {
  res.send('Hello, World from Group 1!');
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default server;
