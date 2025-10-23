const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');


const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());


// Main route
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// User route
const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);

// Country route
app.use("/api/countries", require("./routes/countryRoutes"));

// Division route
app.use("/api/divisions", require("./routes/divisionRoutes"));

// District route
app.use("/api/districts", require("./routes/districtRoutes"));

// Police Station route
app.use("/api/policestations", require("./routes/policeStationRoutes"));
app.use("/api/address", require("./routes/addressRoutes"));


// App run
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});