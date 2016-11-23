import * as React from 'react';
import { bindActionCreators, Dispatch, ActionCreator } from 'redux';
import { connect } from 'react-redux';
import { setData } from '../actions';
import { IAction } from '../reducer';

export interface HelloProps {
    list: Array<String>,
    setData: ActionCreator<IAction>
}

const Hello: React.StatelessComponent<HelloProps> = (props) => {
    return (
        <div>
            <h1>Hello!</h1>
            <ul>{ props.list.map((v, i) => <li key={i}>{v}</li>) }</ul>
            <br />
            <button onClick={() => props.setData(['a', 'b'])}>Clickme</button>
        </div>
    );
}

export default connect(state => ({ list: state.values }), { setData })(Hello);