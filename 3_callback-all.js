const images = [
  "image1.png",
  "image2.png",
  "image3.png",
  "image4.png",
  "image5.png",
];

function loadImages(list, callback) {
  let complete = 0;
  let results = [];
  for (let i = 0; i < list.length; i++) {
    loadImage(list[i], function (err, file) {
      if (!err) {
        results.push(file);
      }
      complete++;
      if (complete === list.length) {
        callback(results);
      }
    });
  }
}

function loadImage(path, callback) {
  console.log(`loading... ${path}`);
  setTimeout(() => {
    callback(null, { file: path });
  }, 3000);
}

loadImages(images, (results) => {
  for (let r of results) {
    console.log(`got file: ${r.file}`);
  }
});
