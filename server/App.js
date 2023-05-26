// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err); // Log the error for debugging purposes

  // Set the response status to 500
  res.status(500).json({ error: 'Internal Server Error' });
});

// Rest of your code...

// Start the server
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
