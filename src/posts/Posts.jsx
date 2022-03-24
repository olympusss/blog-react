import './posts.css'
import Post from './post/Post'


export default function Posts(props) {
  return (
    <div className='posts'>
      {/* {
        props.data.map((post)=>{
          return <Post post={post}/>
        })
      } */}
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  )
}
