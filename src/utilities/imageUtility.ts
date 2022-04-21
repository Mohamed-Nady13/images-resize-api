import sharp from 'sharp';

class ImageUtility {
  public static resizeImage(
    sourcePath: string,
    width: number,
    height: number,
    targetPath: string
  ) {
    return sharp(sourcePath).resize(width, height).toFile(targetPath);
  }
}

export default ImageUtility;
