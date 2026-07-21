const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`Trigger the ArgoCD CD! Version: ${process.env.APP_VERSION || 'v2'}`);
});

app.listen(port, () => console.log(`App listening on port ${port}`));