
import './Header.css';
import Logo from '../img/Logo22.png';
import {AiOutlineStar} from 'react-icons/ai'
import {MdOutlineComment} from 'react-icons/md'
import {FiVideo} from 'react-icons/fi'
import {MdArrowDropDown} from 'react-icons/md'
import {HiOutlineLockClosed} from 'react-icons/hi'
import {GrAdd} from 'react-icons/gr'
import Avatar2 from '../img/avatar2.png';
import calender from '../img/calender.png'
import Googlekeeps from '../img/Gkeep1.png'
import Googletask from '../img/Googletask1.png'
import Googlecontacts from '../img/Gcontacts1.png'
import Googlemap from '../img/Gmap1.png'


const Header =()=>{
    return(
        <div className="Container">
            <div className='docs-branding-document '>
            <img src={Logo} alt='Logo'/> 
            </div>
            <div className='Docs-input-document'>
                <input type='text' className='Input' ></input>
                <div className='Docs-badge'>
                    <AiOutlineStar/>

                </div>
                <div className='Docs-menu-option'>
                    <p>File</p>
                    <p>Edit</p>
                    <p>View</p>
                    <p>Insert</p>
                    <p>Format</p>
                    <p>Tools</p>
                    <p>Extensions</p>
                    <p>Help</p>
                </div>
                
            </div>
            <div className='title-bar-Buttons'>
                <MdOutlineComment className='CommentButton'/>
                <FiVideo className='VideoButton'/>
                <MdArrowDropDown className='dropdown'/>

                <button className='ShareButton'>
                    <HiOutlineLockClosed className='Lock'/>Share</button>

            </div>

            <div className='Sidebar'>
                <a href='https://nilabhportfolio.netlify.app/'>
                <img src={Avatar2}  className='Avatar1' alt='Logo'/>
                </a>

                <a href='https://calendar.google.com/'>
                <img src={calender}  className='Avatar2' alt='Logo'/>
                </a>

                <a href='https://keep.google.com/'>
                <img src={Googlekeeps}  className='Avatar3' alt='Logo'/>
                </a>

                <a href='https://play.google.com/store/apps/details?id=com.google.android.apps.tasks&hl=en_US'>
                <img src={Googletask}  className='Avatar4' alt='Logo'/>
                </a>

                <a href='https://contacts.google.com/'>
                <img src={Googlecontacts}  className='Avatar5' alt='Logo'/>
                </a>

                <a href='https://maps.google.com/'>
                <img src={Googlemap}  className='Avatar6' alt='Logo'/>
                </a>

                <GrAdd className='Add'/>
               
                
            </div>
            
        </div>
    )
}

export default Header;