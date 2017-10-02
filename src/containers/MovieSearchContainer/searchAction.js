import axios from 'axios';
export const types = {
    CLICK_GO: 'CLICK_GO',
    INPUT_FIND: 'INPUT_FIND',
    
  };
  
  export function InputFind(description) {
    return {
      type: types.INPUT_FIND,
      payload: { description },
      
    };
  }
  export function ClickGo (description) {
    //const req = axios.get('http://www.omdbapi.com/?apikey=8730e0e&t='+description)
    //const req = axios.get('http://www.omdbapi.com/?apikey=8730e0e&i=tt3896198')
    const req = axios.get('http://www.omdbapi.com/?s='+description+'&apikey=8730e0e')
    .then(response =>  {
        console.log(response.data)
        return response.data;
       })
       
    return {
      type: types.CLICK_GO,
       
      payload: req
        
    };
}
