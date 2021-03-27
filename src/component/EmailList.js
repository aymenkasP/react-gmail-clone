import { Checkbox , IconButton } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import '../appCss/EmailList.css'
import Section from '../component/Section'
import EmailRow from './EmailRow'
import { useSelector } from 'react-redux';
import {addMail} from '../features/mailSlice'
import { useEffect, useState } from 'react';




export default function EmailList(params) {
    const [emails, setEmails] = useState([])

    useEffect(()=>{
            setEmails(addMail)
            console.log(emails)
    }, [])
        
    
    return(
        <div className ='EmailList'>
            <div className='emailliste_settings'>
              <div className ='emailliste_settings_left'>
                <Checkbox />

                <IconButton>
                    <ArrowDropDownIcon />
                </IconButton>

                <IconButton>
                    <RedoIcon />
                </IconButton>

                <IconButton>
                    <MoreVertIcon />
                </IconButton>

              </div>

              <div className ='emailliste_settings_right'>

              <IconButton>
                    <ChevronLeftIcon />
                </IconButton>

                <IconButton>
                    <ChevronRightIcon />
                </IconButton>

                <IconButton>
                    <KeyboardHideIcon />
                </IconButton>

                <IconButton>
                    <SettingsIcon />
                </IconButton>

              </div>
                  </div>  
              
              <div className='emailliste_sections'>
                    <Section Icon={InboxIcon} title = 'primary' color = 'red' selected />
                    <Section Icon={PeopleIcon} title = 'social' color = '#1A73E8' selected />
                    <Section Icon={LocalOfferIcon} title = 'promotions' color = 'green' selected />
            </div>

            <div className='emailliste'>

                {emails.map(({id , data : {to , subject , Message , timesen}})=>{
                return    <EmailRow
                    id ={id}
                    key={id}
                    title ={to}
                    subject = {subject}
                    description ={Message}
                    time = {new Date(timesen?.seconds * 1000).toString()}
             />
                })}
            

            <EmailRow
            title ='Twitch'
            subject = 'Hey streamer'
            description = 'kas'
            time = '8pm'
             />
            <EmailRow
            title ='Twitch'
            subject = 'Hey streamer'
            description = 'This is twitch'
            time = '8pm'
             />
            <EmailRow
            title ='Twitch'
            subject = 'Hey streamer'
            description = 'This is twitch'
            time = '8pm'
             />
            <EmailRow
            title ='Twitch'
            subject = 'Hey streamer'
            description = 'This is twitch from japan lets go to stream in twitgo chanel'
            time = '8pm'
             />

<EmailRow
            title ='Twitch'
            subject = 'Hey streamer'
            description = 'This is twitch'
            time = '8pm'
             />
            <EmailRow
            title ='Twitch'
            subject = 'Hey streamer'
            description = 'This is twitch from japan lets go to stream in twitgo chanel'
            time = '8pm'
             />

<EmailRow
            title ='Twitch'
            subject = 'Hey streamer'
            description = 'This is twitch'
            time = '8pm'
             />
            <EmailRow
            title ='Twitch'
            subject = 'Hey streamer'
            description = 'This is twitch from japan lets go to stream in twitgo chanel'
            time = '8pm'
             />

<EmailRow
            title ='Twitch'
            subject = 'Hey streamer'
            description = 'This is twitch'
            time = '8pm'
             />
            <EmailRow
            title ='Twitch'
            subject = 'Hey streamer'
            description = 'This is twitch from japan lets go to stream in twitgo chanel'
            time = '8pm'
             />
             <EmailRow
            title ='Twitch'
            subject = 'Hey streamer'
            description = 'This is twitch'
            time = '8pm'
             />
            <EmailRow
            title ='Twitch'
            subject = 'Hey streamer'
            description = 'This is twitch from japan lets go to stream in twitgo chanel'
            time = '8pm'
             />

             

            </div>
            




        </div>
    )
};
