import { Checkbox, IconButton } from '@material-ui/core'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import '../appCss/EmailRow.css'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { selectMail } from '../features/mailSlice'

export default function EmailRow({ id, title, subject, description, time }) {

    const history = useHistory()
    const dispatch = useDispatch()
    console.log(description)
    const openMail = () => {

        dispatch(selectMail(
            {
            id,
            title,
            subject,
            description,
            time,
        }
        ))
        history.push('/mail')

    }

    return (
        <div onClick={() => openMail()} className='emailRow'>
            <div className='emailRow_options' >

                <Checkbox />

                <IconButton>
                    <StarBorderIcon />
                </IconButton>

                <IconButton>
                    <LabelImportantIcon />
                </IconButton>



            </div>
            <div className='emailRow_title' >
                <h3> {title} </h3>
            </div>

            <div className='emailRow_message' >
                <h4> {subject} {" "} <span className='emailRow_description' >
                    - {description}
                </span>
                </h4>

            </div>

            <p className='emailRow_time' >
                {time}
            </p>


        </div>
    )
};
