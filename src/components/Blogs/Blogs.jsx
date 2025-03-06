import { useContext } from 'react';
import style from './AllBlogs.module.css'
import { MdOutlineCreateNewFolder } from "react-icons/md";
import {Link} from 'react-router'
import { useSelector } from 'react-redux';


const Blogs=()=>{
  const {travelBlogs}=useSelector(store=>store.blogs)
  console.log('i am blogs')
  const travelBlog=travelBlogs;
  return(<div className={style.container}>
    {travelBlog.map(travelBlog=><div key={travelBlog.author} className={style.supcard}>
      <div className={style.card} >
          <h2>{travelBlog.title}</h2>
          <span>Poblished by <u>{travelBlog.author}</u> on {travelBlog.date}</span>
           <p>{travelBlog.content}</p>
          <div className={style.tags}>
          {travelBlog.tags.map(tag=><li key={tag}>{tag}</li>)}
          </div>
      </div>
      </div>)}
      <Link to='create-blog' className={style.createbutton}>
      <MdOutlineCreateNewFolder style={{height:"40px", width:"40px"}}/>
      </Link>
    </div>)
}
export default Blogs;