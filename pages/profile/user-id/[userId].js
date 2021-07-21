const ProfilePage = () => {
    return (
        <div>
            ProfilePage
        </div>
    );
};

export async function getServerSideProps(context) {
    const userId = context.query.userId;

    return {
        props: {
             
        }
    }
}
export default ProfilePage;