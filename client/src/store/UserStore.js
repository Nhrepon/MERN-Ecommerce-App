import React from 'react';
import {create} from 'zustand';
import axios from 'axios';

const UserStore = create((set)=>({
    registrationFormValue: {email:"", password:""},
    registrationFormOnChange:(name, value)=>{
        set((state)=>({
            registrationFormValue:{
                ...state.registrationFormValue,
            [name]:value
            }
        }))
    },

    userRegistration:async(postBody)=>{
        const response = await axios.post("/api/userRegistration", postBody);
        return response.data["status"]=== "success";
    }







}));

export default UserStore;