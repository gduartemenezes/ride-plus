// Main modules
const express = require('express');
const cors = require('cors');

// Routers Modules
const userRouter = require('./routes/userRoutes');

//Express setup
const app = express();
app.use(express.json());
app.use(cors());



// App routing
app.use('/api/v1/users', userRouter);

app.listen(3333, () => {
    console.log('Api Running');
})