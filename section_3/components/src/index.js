import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
        </div>
        <div>Are you sure you want to do this?</div>
      </ApprovalCard>
      <ApprovalCard>
        <p>asdfasdf</p>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="Wow so coool"
          avatar={faker.image.image(60, 40)}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Ben"
          timeAgo="Today at 2:00PM"
          content="My first post"
          avatar={faker.image.image(60, 40)}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Yesterday at 5:00PM"
          content="My second post"
          avatar={faker.image.image(60, 40)}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
