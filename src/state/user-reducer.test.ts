import {userReducer} from './user-reducer';

test('user reducer should increment only age', () => {
    const startState = { age: 20, childrenCount: 2, name: 'Dimych' };

    const endState = userReducer(startState, { type: 'INCREMENT-AGE' })

    expect(endState.age).toBe(21);
    expect(endState.childrenCount).toBe(2);
});

test('user reducer should increment only childrenCount', () => {
    const startState = { age: 20, childrenCount: 2, name: 'Dimych' };

    const endsState = userReducer(startState, { type: 'INCREMENT-CHILDREN-COUNT'})

    expect(endsState.childrenCount).toBe(3);
    expect(endsState.age).toBe(20)
    expect(endsState.name).toBe('Dimych')
});

test('user reducer should change name of users', () => {
    const startState = { age: 20, childrenCount: 2, name: 'Dimych' };

    const newName = 'Victor'

    const endsState = userReducer(startState, { type: 'CHANGE-NAME', newName: newName})

    expect(endsState.childrenCount).toBe(2);
    expect(endsState.age).toBe(20)
    expect(endsState.name).toBe('Victor')
});
