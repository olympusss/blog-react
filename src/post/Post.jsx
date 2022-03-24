import './post.css'

export default function Post(props) {
    console.log(props)
  return (
    <div className='post'>
        <img
            className='postImg' 
            src="https://media.istockphoto.com/photos/into-the-loving-arms-of-nature-picture-id1266167947?b=1&k=20&m=1266167947&s=170667a&w=0&h=EVVvlOJL-zKCgsOUjZFwMDC55vfSRl9s3iM4XAIZVqk=" 
            alt="" 
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Cumque rem provident quod quisquam laudantium beatae tempore.
            Quod doloremque consequuntur laudantium quidem at. Veritatis 
            hic beatae quaerat in eos illum laudantium. Lorem ipsum dolor 
            sit amet consectetur adipisicing elit. 
            Cumque rem provident quod quisquam laudantium beatae tempore.
            Quod doloremque consequuntur laudantium quidem at. Veritatis 
            hic beatae quaerat in eos illum laudantium. Lorem ipsum dolor 
            sit amet consectetur adipisicing elit. 
            Cumque rem provident quod quisquam laudantium beatae tempore.
            Quod doloremque consequuntur laudantium quidem at. Veritatis 
            hic beatae quaerat in eos illum laudantium.
        </p>
    </div>
  )
}
