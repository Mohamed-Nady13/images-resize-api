import express, { Request, Response } from 'express';
import fs from 'fs';
import ImageUtility from './utilities/imageUtility';

const app = express();
const port = 3000;

app.get('/image', (req: Request, res: Response) => {
  const imagePath = __dirname + '/images/' + req.query.filename;

  const width: number = parseInt((req.query.width as string) || '200');
  const height: number = parseInt((req.query.height as string) || '200');

  const thumbPath =
    __dirname + '/thumb/' + width + '_' + height + req.query.filename;

  if (fs.existsSync(thumbPath)) {
    res.sendFile(thumbPath);
  } else if (fs.existsSync(imagePath)) {
    ImageUtility.resizeImage(imagePath, width, height, thumbPath).then(
      (data) => {
        res.sendFile(thumbPath);
      }
    );
  } else {
    res.statusCode = 400;
    res.send('File not found');
  }
});

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;
