const path = require('path');
const fs = require('fs');

// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//   if (err) {
//     if (err.code === 'EEXIST') console.error('Такая папка уже существует');
//     throw err;
//   }
//
//   console.log('Folder was create');
// });

// fs.writeFile(
//   path.join(__dirname, 'notes', 'my_notes.txt'),
//   'Hello Alex',
//   (err) => {
//     if (err) throw err;
//     console.log('File was create');
//
//     fs.appendFile(
//       path.join(__dirname, 'notes', 'my_notes.txt'),
//       ' From append file',
//       (err1) => {
//         if (err1) throw err;
//         console.log('File was change');
//
//         fs.readFile(
//           path.join(__dirname, 'notes', 'my_notes.txt'),
//           'utf-8',
//           (err, data) => {
//             if (err) throw err;
//
//             console.log(data);
//           }
//         );
//       }
//     );
//   }
// );

// fs.rename(
//   path.join(__dirname, 'notes', 'my_notes.txt'),
//   path.join(__dirname, 'notes', 'notes.txt'),
//   (err) => {
//     if (err) throw err;
//
//     console.log('File was rename');
//   }
// );
