const express = require("mongoose");
const cors = require("cors");
const PORT = 8080;

const app = express();
app.use(cors());
app.use(express.json());

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
});
