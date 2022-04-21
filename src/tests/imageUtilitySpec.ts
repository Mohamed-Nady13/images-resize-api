import ImageUtility from '../utilities/imageUtility';
import fs from 'fs';

describe('Test image processing', () => {
  it('Image resizing', async () => {
    const imagePath = __dirname + '/images/' + 'palmtunnel.jpg';

    const width = 200;
    const height = 200;

    const thumbPath =
      __dirname + '/thumb/' + width + '_' + height + 'palmtunnel.jpg';

    ImageUtility.resizeImage(imagePath, width, height, thumbPath).then(
      (data) => {
        const exist = fs.existsSync(thumbPath);
        expect(exist).toBe(true);
      }
    );
  });
});
