import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Test server is running!' });
});

const PORT = 8000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Test server running at http://localhost:${PORT}`);
    console.log(`Test server accessible at http://192.168.235.50:${PORT}`);
}); 