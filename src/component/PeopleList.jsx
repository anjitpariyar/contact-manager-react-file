import React, { useState } from 'react';
import ReactDOM from 'react-dom';
const PeopleList = props=> {
     const arr = props.data;
     let { deleteFunc , count}= props;

     
     if (!(count==null)){
          arr.splice(count, 1);
     }
     else{
     }
     const listItems = arr.map( (val, index) =>
          <li key={index} value={index}>
               <span>{index+1}.      {val}</span> 
               <button onClick={deleteFunc}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
               </svg></button>
          
          </li>
     )
     return <ol>{listItems} </ol>;
}
export default PeopleList