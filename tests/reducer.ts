import { SET_DATA } from '../src/actions';
import reducer, { INITIAL_STATE } from '../src/reducer';

test('SET_DATA should reset the data', () => {
    const data = ['c', 'd'];

    const editedState = (<any>Object).assign(
        {},
        INITIAL_STATE,
        { values: ['a', 'b'] }
    );
    const newstate = reducer(editedState, { type: SET_DATA, payload: data });
    expect(newstate).toEqual((<any>Object).assign(
        {},
        INITIAL_STATE,
        { values: ['c', 'd'] }
    ));
});