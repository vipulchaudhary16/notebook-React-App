import {React , useContext} from 'react'
import noteContext from "../context/Notes/noteContext";
import NoteItem from "./NoteItem"

function Notes() {
    const context =  useContext(noteContext)
  const {notes , setNotes} = context;
    return (
        <div className="row my-3">
        <h3>Your Notes</h3>
        {notes.map((note)=>{
          return <NoteItem note = {note}/>;
        })}
      </div>
    )
}

export default Notes
