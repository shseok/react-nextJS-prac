import React from "react";

const LikeAndDislike = ({
    likeCount,
    onLikeClick,
    onDislikeClick,
}) =>
    <div>
        <p>Name : Hyeon</p>
        <p>Age : 20</p>
        <p>Major : Software</p>
        <br />
        
        <p>{likeCount}</p>
        <button onClick={onLikeClick}>like</button>
        &nbsp;
        <button onClick={onDislikeClick}>dislike</button>
        <br />
    </div>;

export default LikeAndDislike;