
import '../appCss/Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
export default function Header(params) {
    return (
        <div className= 'Header' >
           <div className= 'Header_left'>
           <IconButton>
             <MenuIcon />  
           </IconButton>
            <img src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" alt ='gmail_logo' ></img>
           </div>
           <div className= 'Header_middle'>
            <SearchIcon />
            <input placeholder='Search' type ='text' ></input>
            <ArrowDropDownIcon className='header_inputCare' / >
                       </div>
           <div className= 'Header_right'>
            <IconButton>
                <AppsIcon />
            </IconButton>
            <IconButton>
                <NotificationsIcon></NotificationsIcon>
            </IconButton>

            <Avatar></Avatar>
           </div>

        </div>
    )
};
