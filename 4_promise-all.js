const images = [
  "image1.png",
  "image2.png",
  "image3.png",
  "image4.png",
  "image5.png",
];

function loadImages(list) {
  // let promises = [];
  // for (let i = 0; i < list.length; i++) {
  //   promises.push(loadImage(list[i]));
  // }
  const promises = list.map((path) => loadImage(path));
  return Promise.all(promises);
}

function loadImage(path) {
  return new Promise((resolve, reject) => {
    console.log(`loading... ${path}`);
    setTimeout(() => {
      // if (Math.random() * 10 > 5) {
      resolve({ file: path });
      // } else {
      //   reject(`fail load file: ${path}`);
      // }
    }, 3000);
  });
}

loadImages(images)
  .then((results) => {
    for (let r of results) {
      console.log(`got file: ${r.file}`);
    }
  })
  .catch((err) => {
    console.log(`fail loading: ${err}`);
  });
