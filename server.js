const express = require('express');
const path = require('path');
const app = express();

// Railway asigna automáticamente un puerto mediante process.env.PORT
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`EmpresaPro Suite corriendo en el puerto ${PORT}`);
});
