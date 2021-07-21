import Link from "next/link";

const IndexPage = () => {
    return (
        <div>
            <p>hello world?!!!</p>
            <span>hello</span>
            <h1>hihihi</h1>
            <Link href="/counter">
                <button>oooo</button>
            </Link>
        </div>
    );
}

export default IndexPage;


// const userName = "hyeon";

// const IndexPage = () =>
//     <div>
//         <p>hello world {userName}</p>
//     </div>

// export default IndexPage;