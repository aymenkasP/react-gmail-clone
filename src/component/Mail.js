
import { IconButton } from '@material-ui/core'
import '../appCss/Mail.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useSelector } from 'react-redux';
import {selectOpMail} from '../features/mailSlice'

export default function Mail(params) {
    const history = useHistory()
    const selectMail = useSelector(selectOpMail)
    return(
        <div className='Mail'>

        <div className='mail_tools' >
            <div className='mail_toolLeft' >

            <IconButton  onClick={()=> history.push('/') } >
                <ArrowBackIcon />
            </IconButton>

            <IconButton>
                <MoveToInboxIcon />
            </IconButton>

            <IconButton>
                <ErrorIcon />
            </IconButton>

            <IconButton>
                <DeleteIcon />
            </IconButton>

            <IconButton>
                <WatchLaterIcon />
            </IconButton>

            </div>

            <div className='mail_toolRight' >

                <IconButton>
                    <UnfoldMoreIcon />
                </IconButton>

                <IconButton>
                    <PrintIcon />
                </IconButton>

                <IconButton>
                    <ExitToAppIcon />
                </IconButton>

            </div>
        </div>
           

        <div className='mail_body' >
            <div className='mail_bodyHeader' >
                <h2> {selectMail?.subject} </h2>
                <LabelImportantIcon className ='mail_LabelImportantIcon'/>
                <p>{selectMail?.title} </p>
                <p className='mail_time' > {selectMail?.time} </p>
            </div>

            <div className='mail_message' >
              <p> {selectMail?.description} </p>  
             </div>

        </div>

        </div>
    )

};
