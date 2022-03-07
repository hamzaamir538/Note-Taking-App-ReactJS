import React, { useState } from 'react'
import './AddNote.css'

let notesArr = [];

// export function notesListFun(){
//     const notesList = [...notesArr];
//     return(
//         notesList
//     )
// }
// const notesList = [...notesArr];
// export {notesList};

const AddNote = () => {

    const input = (event) => {
        setSingleNote(event.target.value);
    }

    const addNoteBtn = (event) => {
        event.preventDefault();
        // console.log(singleNote);
        // notesArr.push(singleNote);
        notesArr = [...notesArr, singleNote];
        // console.log(notesArr);
        // notesListFun();
    }

    let [singleNote, setSingleNote] = useState('');

  return (
    <div>
        <div>
            <form action="" className='box' onSubmit={addNoteBtn}>
                <textarea name="" rows="10" value={singleNote} onChange={input} className='input' placeholder='Add Note Here....'></textarea>
                <div className='btn-box'>
                    <button type='submit'>ADD</button>
                </div>    
            </form>
        </div>
    </div>
  )
}

export default AddNote