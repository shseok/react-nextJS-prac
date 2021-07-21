import LikeAndDislike from "../../components/LikeAndDislike";
import React, {useState} from 'react';

// useState 부분에 Number, Boolean, String과 같은 primitive type을 넣어야 함
const sample0 = () => {
    const [showGreeting /*value*/, setshowGreeting/*method*/] = useState(false);
    const [likeCount /*value*/, setlikeCount/*method*/] = useState(0);

    return (
        <div>
            <LikeAndDislike
                likeCount={likeCount}
                onLikeClick={() => setlikeCount(likeCount + 1)}
                onDislikeClick={() => {
                    if (likeCount === 0)
                        return;
                    setlikeCount(likeCount - 1)
                }}
            />
            <button onClick={() => setshowGreeting(!showGreeting)}>{showGreeting ? "hello" : "showGreeting"} </button>
        </div>
        
    );
}
export default sample0;