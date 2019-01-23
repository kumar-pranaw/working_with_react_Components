import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './commentDetail'
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    const comment1 = 'Looks like a nice comment'; 
    const comment2 = 'Hi dear nice pic though'; 
    const comment3 = 'Having fun!!'; 
    return (
        <div className="ui conatiner comments">
          <ApprovalCard></ApprovalCard>
            <CommentDetails author="Sam"  
            timeAgo = "Today at 4:45PM" 
            commentText={comment1} userImg={faker.image.avatar()} />

            <CommentDetails author="Alex"
             timeAgo = "Today at 7:15AM" 
             commentText={comment2} userImg={faker.image.avatar()}/>

            <CommentDetails author="Jane"
             timeAgo = "Today at 2:00PM"
              commentText={comment3} userImg={faker.image.avatar()}/>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));