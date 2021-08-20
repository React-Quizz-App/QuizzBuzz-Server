const request = require('supertest');
const { server }= require('../server');

describe('API server', () => {
    let api;
    let testEntry = {
        name: 'Jeff',
        category: 'Big Science',
        difficulty: 'easy',
        score: '500'
    };
    let port = 5000;

    beforeAll(()=>{
        api = server.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
    })

    test('Get highscores responds with status 200', (done)=>{
        request(api).get('/highscores').expect(200,done);
    })

    test('Post a new entry responds with status 201', (done) => {
        request(api)
        .post('/highscores')
        .send(testEntry)
        .set('Accept', /application\/json/)
        .expect(201,done)
    })

    test('Filter results with a category and difficulty responds with status 200', (done)=>{
        request(api).get('/highscores/gaming/hard').expect(200,done);
    })

    test('Check if username exists responds with status 200', (done)=>{
        request(api).get('/highscores/Jeff').expect(200,done);
    })

    afterAll((done) => {
        console.log('server closed');
        api.close(done)
    })
});