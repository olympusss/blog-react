import './header.css'

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
          <span className="headerTitleSm">React & Django</span>
          <span className="headerTitleLg">Blog</span>
      </div>
      <img 
        src="/img/sunsplash.jpg" 
        alt="" className="headerImg" 
      />
    </div>
  )
}
