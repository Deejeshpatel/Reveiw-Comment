import Post from "../Post/Post"

const PostContainer = () => {

    return (
        <div className="post-container p-5">
            <div className="text-center">
                <h1>
                    Posts
                </h1>
            </div>
            <Post primg={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SGwDaaE4sB2MRpc-BxIKQyLuSdVbLtK4mgMfz2x0Zw&s'} name={'Deejesh patel '} post={'https://www.ing.com/upload_mm/b/7/a/cid61211_2020_Steven-van-Rijswijk_264x199.png'} />
            <Post primg={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuixzSE7GhrfWVc8c6hUOPmmbjM4ZoZNrLrEp3HtZWIw&s'} name={'Arun patel'} post={'https://pbs.twimg.com/media/Fqyn-UAWYAMVWut?format=jpg&name=4096x4096'} />
            <Post primg={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi7XSyB_7ErLZNkxYs2JtYkZSa62avu8xC7YRW1bTsnw&s'} name={'Anita patel'} post={'https://media.licdn.com/dms/image/D4E22AQGAECz8QNnJXg/feedshare-shrink_800/0/1714467462097?e=2147483647&v=beta&t=lYaC-XNNPhbBx93eRmZfeeEZ9ZT6_WunVYAg32ZKGXY'} />
        </div>
    )

}

export default PostContainer