const mongoose = require('mongoose')

// DDBB Connection
mongoose.connect(process.env.MONGODB, {})
.then(() => console.log("Database connected"))
.catch(error => console.log(error))
