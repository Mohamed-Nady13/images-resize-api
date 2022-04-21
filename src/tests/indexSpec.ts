import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get(
      '/image?filename=encenadaport.jpg&width=200&height=200'
    );
    expect(response.status).toBe(200);
  });

  it('gets the api endpoint - invalid image name', async () => {
    const response = await request.get(
      '/image?filename=mmm.jpg&width=200&height=200'
    );
    expect(response.status).toBe(400);
  });
});
