import axios from 'axios'
import { ADD_PIC,ALL_PIC,INCRE_VIEW } from './type'
export const addpic = (data) => async(dispatch) => {
    try {
        const res = axios.post("https://oz7i92-4000.csb.app/pic",data)

        dispatch({
            type : ADD_PIC,
            payload : data
        })
    console.log("The data is ",data);

    }catch(e){
console.log("Error ",e);
    }
}

export const allpic = (data) => async(dispatch) => {
    const res =await  axios.post('https://oz7i92-4000.csb.app/getallpic',{
        id : data
    }) ;
  
    dispatch({
        type : ALL_PIC,
        payload : res.data.res
      
    })
}
export const increament  = (id) => async (dispatch) => {
    try {
        const res = await axios.put(`https://oz7i92-4000.csb.app/save/${id}`)

        dispatch({
            type : INCRE_VIEW,
            payload : res.data.picUpdate
        })


    }catch(e) {
        console.log("The errror in increament")
    }
}