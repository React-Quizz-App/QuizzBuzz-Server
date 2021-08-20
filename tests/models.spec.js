const {GameState} = require('../models/GameState');
const HighScore = require('../models/HighScore');

describe('API Models', () => {

    test('HighScore Model', ()=>{
        const score = new HighScore('bob', 'science', 'easy', 300);
        expect(score.name).toBe('bob');
    })

    test('GameState Model', ()=>{
        const state = new GameState('science', 'hard', 'bob', 'asd45', [1,2,3,4,5]);
        expect(state.category).toBe('science');
        expect(state.users.length).toBe(1);
        expect(state.isGameStarted).not.toBeTruthy();
        expect(state.users[0].name).toBe('bob');
    })
});
