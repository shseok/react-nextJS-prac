const friends = ["Eric", "Jimmy", "Steve", "Joe"];

const FriendsPage = () => 
    <div>
        {friends.map((friend, i) => <p key={i}>name : {friend}</p>)} 
    </div>;
// key는 vertual DOM에서 render하기 위해 도와주는 용도. -> index로 하는 방법도 별로 좋진 않다.
export default FriendsPage;