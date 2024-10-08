// test/server.test.js
import request from 'supertest';
import { expect } from 'chai';  // Use import instead of require
import server from '../server.js';

describe('GET /', () => {
  it('should return Hello World message', (done) => {
    request(server)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal('Hello, World from Group 1!');
        done();
      });
  });
});
