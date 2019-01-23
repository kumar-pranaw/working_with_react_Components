import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './commentDetail'
const App = () => {
    return (
        <div className="ui conatiner comments">
            <CommentDetails author="Sam" />
            <CommentDetails author="Alex"/>
            <CommentDetails author="Jane"/>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));