const fs = require("fs");
//const sharp = require("sharp");

const getImageData = async (imagePath) => {
  try {
    // 读取图像文件
    const imageBuffer = await fs.promises.readFile(imagePath);

    // 解码图像文件
    //const decodedImage = await sharp(imageBuffer).toBuffer();
    /*fs.writeFile("myImage.jpg", decodedImage, function (err) {
      if (err) throw err;
      console.log("Image saved to file!");
    });*/
    return imageBuffer;
  } catch (err) {
    console.error(err);
  }
};
module.exports = getImageData;
