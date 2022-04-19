import {addTaskAC, changeStatusAC, changeTitleAC, removeTaskAC, tasksReducer} from './tasks-reducer';
import {TasksStateType} from '../App';

test('correct task should be removed', () => {

    const startState: TasksStateType = {
        'todolistId1':
            [
                {id: '1', title: 'HTML&CSS', isDone: true},
                {id: '2', title: 'JS', isDone: true},
                {id: '3', title: 'React', isDone: true}
            ],
        'todolistId2':
            [
                {id: '1', title: 'Milk', isDone: true},
                {id: '2', title: 'React Book', isDone: true},
                {id: '3', title: 'milk', isDone: true}
            ]
    };

    const action = removeTaskAC('2', 'todolistId2')
    const endState = tasksReducer(startState, action)

    expect(endState['todolistId1'].length).toBe(3);
    expect(endState['todolistId2'].length).toBe(2);
    expect(endState['todolistId2'].every(t => t.id != '2')).toBeTruthy();
});

test('correct task should be add', () => {

    const startState: TasksStateType = {
        'todolistId1':
            [
                {id: '1', title: 'HTML&CSS', isDone: true},
                {id: '2', title: 'JS', isDone: true},
                {id: '3', title: 'React', isDone: true}
            ],
        'todolistId2':
            [
                {id: '1', title: 'Milk', isDone: true},
                {id: '2', title: 'React Book', isDone: true},
                {id: '3', title: 'milk', isDone: true}
            ]
    };

    const action = addTaskAC('juice','todolistId2')
    const endState = tasksReducer(startState, action)

    expect(endState['todolistId1'].length).toBe(3);
    expect(endState['todolistId2'].length).toBe(4);
    expect(endState['todolistId2'][0].id).toBeDefined();
    expect(endState['todolistId2'][0].title).toBe('juice');
    expect(endState['todolistId2'][0].isDone).toBe(false);
});

test('status of specified task should be changed', () => {

    const startState: TasksStateType = {
        'todolistId1':
            [
                {id: '1', title: 'HTML&CSS', isDone: true},
                {id: '2', title: 'JS', isDone: true},
                {id: '3', title: 'React', isDone: true}
            ],
        'todolistId2':
            [
                {id: '1', title: 'Milk', isDone: true},
                {id: '2', title: 'React Book', isDone: true},
                {id: '3', title: 'milk', isDone: true}
            ]
    };

    const action = changeStatusAC('2', false,'todolistId2')
    const endState = tasksReducer(startState, action)

    expect(endState['todolistId2'][1].isDone).toBeFalsy();
    expect(endState['todolistId1'][1].isDone).toBeTruthy();
});

test('status of specified task should be changed', () => {

    const startState: TasksStateType = {
        'todolistId1':
            [
                {id: '1', title: 'HTML&CSS', isDone: true},
                {id: '2', title: 'JS', isDone: true},
                {id: '3', title: 'React', isDone: true}
            ],
        'todolistId2':
            [
                {id: '1', title: 'Milk', isDone: true},
                {id: '2', title: 'React Book', isDone: true},
                {id: '3', title: 'milk', isDone: true}
            ]
    };

    const action = changeStatusAC('2', false,'todolistId2')
    const endState = tasksReducer(startState, action)

    expect(endState['todolistId2'][1].isDone).toBeFalsy();
    expect(endState['todolistId1'][1].isDone).toBeTruthy();
});

test('title of specified task should be changed', () => {

    const startState: TasksStateType = {
        'todolistId1':
            [
                {id: '1', title: 'HTML&CSS', isDone: true},
                {id: '2', title: 'JS', isDone: true},
                {id: '3', title: 'React', isDone: true}
            ],
        'todolistId2':
            [
                {id: '1', title: 'Milk', isDone: true},
                {id: '2', title: 'React Book', isDone: true},
                {id: '3', title: 'milk', isDone: true}
            ]
    };

    const action = changeTitleAC('2', 'Snickers','todolistId2')
    const endState = tasksReducer(startState, action)

    expect(endState['todolistId2'][1].title).toBe('Snickers');
    expect(endState['todolistId1'][1].title).toBe('JS');
});

test('title of specified task should be changed', () => {

    const startState: TasksStateType = {
        'todolistId1':
            [
                {id: '1', title: 'HTML&CSS', isDone: true},
                {id: '2', title: 'JS', isDone: true},
                {id: '3', title: 'React', isDone: true}
            ],
        'todolistId2':
            [
                {id: '1', title: 'Milk', isDone: true},
                {id: '2', title: 'React Book', isDone: true},
                {id: '3', title: 'milk', isDone: true}
            ]
    };

    const action = changeTitleAC('2', 'Snickers','todolistId2')
    const endState = tasksReducer(startState, action)

    expect(endState['todolistId2'][1].title).toBe('Snickers');
    expect(endState['todolistId1'][1].title).toBe('JS');
});

