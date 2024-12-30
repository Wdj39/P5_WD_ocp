const sass = require('sass');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to compile a single SCSS file
function compileSass(file) {
  const result = sass.renderSync({
    file: file,
  });

  const outFile = path.join(path.dirname(file), path.basename(file, '.scss') + '.css');
  fs.writeFileSync(outFile, result.css);
  console.log(`Compiled ${file} to ${outFile}`);
}

// Find all SCSS files in the project
glob('src/**/*.scss', (err, files) => {
  if (err) {
    console.error('Error finding SCSS files:', err);
    return;
  }

  files.forEach(compileSass);
});