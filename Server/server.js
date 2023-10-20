const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const util = require('util');
const readdir = util.promisify(fs.readdir);

const app = express();
const port = 3000;

// Enable CORS for all origins (You can configure this as needed)
app.use(cors());

async function buildImageMap(directoryPath) {
    const imageMap = {};
  
    try {
      // Read the main directory to get a list of subdirectories (folders)
      const subdirectories = await readdir(directoryPath, { withFileTypes: true });
  
      // Loop through the subdirectories
      for (const subdirectory of subdirectories) {
        if (subdirectory.isDirectory()) {
          const subdirectoryPath = path.join(directoryPath, subdirectory.name);
  
          // Read the subdirectory to get a list of image files
          const imageFiles = await readdir(subdirectoryPath);
  
          // Store the list of image files in the map with the subdirectory name as the key
          imageMap[subdirectory.name] = imageFiles;
        }
      }
  
      return imageMap;
    } catch (error) {
      console.error('Error building image map:', error);
      return {};
    }
  }

// Define the route to list image paths
app.get('/api/images', (req, res) => {
  const imagesDirectory = '../Website//src/assets/Photos/Home'; // Change 'images' to your image directory

  fs.readdir(imagesDirectory, (err, files) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const imagePaths = files
        .filter(file => file.endsWith('.jpg') || file.endsWith('.png')) // Adjust file extensions as needed
        .map(file => `/assets/Photos/Home/${file}`);

      res.status(200).json(imagePaths);
    }
  });
});

app.get('/api/portfolio', async(req, res) => {
    const imagesDirectory = '../Website/src/assets/Photos/Portfolio'; // Change 'images' to your image directory
    try {
      const imageMap = await buildImageMap(imagesDirectory);
      res.json(imageMap);
    } catch (error) {
      console.error('Error in GET request:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }

  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});