import { Button } from '@material-ui/core'
import {useForm} from 'react-hook-form'
import '../appCss/SendMail.css'
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import {closeSendMessage, sendMail} from '../features/mailSlice'
import { useSelector } from 'react-redux';
import {addMail} from '../features/mailSlice'

export default function SendMail(params) {

    const {register , handleSubmit  ,errors} = useForm();
    const dispatch =useDispatch()
    const sendMail = useSelector(addMail)

    const onsubmit = (formData) => {
        console.log(formData)
      sendMail(formData)

       dispatch(closeSendMessage())
    }
        
    return(
        <div className =' sendMail'>
            <div className='sendMail_header' >
                    <h3>New message</h3>
                    <CloseIcon  className='closeMailIcon' 
                    onClick={()=> dispatch(closeSendMessage()) }
                     />
            </div>

            <form onSubmit={handleSubmit(onsubmit)}  >


                <input name ='to' placeholder='to' type='email'
                 ref={register({required : true})} />
                 {errors.to && <p className='ero' >to is required</p> }

                <input name='subject' placeholder='subject' type = 'text'
                  ref={register({required : true})}/>
                {errors.subject && <p className='ero'>subject is required</p> }


                <input name='Message' placeholder='Message' type = 'text' className='mailMessage'
                 ref={register({required : true})} />
                  {errors.Message && <p className='ero'>Message is required</p> }

                <div className='sendMailOptions' >

                    <Button className='sendMailBtn'
                    
                    type = 'submit'
                     >
                      Send
                    </Button>
                </div>

            </form>


        </div>
    )
};
