const path = require('path')

// OS folder separator
console.log(path.sep)

// Create a filepath, using folders + separator
const filePath = path.join('/content', 'subfolder', 'text.txt')
console.log(filePath);

// Get the file name from file path
const base = path.basename(filePath)
console.log(base);

// Absolute file path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute);