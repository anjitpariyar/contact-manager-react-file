import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const AddPersonForm= props => {
     
     let { person, handleChange, handleSubmit }= props;


    
     return (
          <form onSubmit={handleSubmit}>
               <input type="text"
                    placeholder="Add new contact"
                    onChange={handleChange}
                     />
               <button type="submit">Add</button>
          </form>

     );
}

export default AddPersonForm