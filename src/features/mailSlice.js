import {createSlice} from '@reduxjs/toolkit'


export const mailSlice = createSlice({

    name : 'mail' ,
    initialState : {
        selectMail : null ,
        sendMessageIsOpen : false ,
        seMail : ['test']
    },

 

     
    reducers : {
        selectMail : (state , action) => {
            state.selectMail = action.payload;
        },
        openSendMessage : state => {
            state.sendMessageIsOpen = true;
        },

        closeSendMessage : state => {
            state.sendMessageIsOpen = false;
        },

    },

     } );


export const {selectMail,openSendMessage ,closeSendMessage ,  SendMail} = mailSlice.actions

export const selectOpMail = (state) => state.mail.selectMail;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const addMail = (state) => state

console.log(selectOpMail)


export default mailSlice.reducer