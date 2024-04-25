const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3003;

// Enable all CORS requests
app.use(cors());



// Mock data for tabs
const tabs = [
  { id: 1, label: 'Tab 1',title:'Title 1', content: 'lorum ipsum dolor sit amet sit   amet                   vitlorem ipsum dolor sit amet sit   amet                   vit lorem ipsum dolor sit amet sit   amet                   vitlorem ipsum dolor sit amet sit   amet                   vit ' },
  { id: 2, label: 'Tab 2',title:'Title 2', content: 'lorum ipsum dolor sit amet sit   amet                   vitlorem ipsum dolor sit amet sit   amet                   vit lorem ipsum dolor sit amet sit   amet                   vitlorem ipsum dolor sit amet sit   amet                   vit ' },
  { id: 3, label: 'Tab 3',title:'Title 3', content: 'lorum ipsum dolor sit amet sit   amet                   vitlorem ipsum dolor sit amet sit   amet                   vit lorem ipsum dolor sit amet sit   amet                   vitlorem ipsum dolor sit amet sit   amet                   vit ' },
  { id: 3, label: 'Tab 4',title:'Title 4', content: 'lorum ipsum dolor sit amet sit   amet                   vitlorem ipsum dolor sit amet sit   amet                   vit lorem ipsum dolor sit amet sit   amet                   vitlorem ipsum dolor sit amet sit   amet                   vit ' }

];

// Route to get tab data
app.get('/tabs', (req, res) => {
  res.json(tabs);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
