import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Notes = ({ backlogId }) => {
  const [noteText, setNoteText] = useState('')
  const [userNotes, setUserNotes] = useState('')
  const [noteId, setNoteId] = useState(null)
  const [hasNotes, setHasNotes] = useState(false)
  let { userId } = useParams()

  useEffect(() => {
    const getUserNotes = async () => {
      const response = await axios
        .get(`http://localhost:3001/api/notes/${userId}/${backlogId}`)
        .catch((err) => console.log(err))
      console.log('UseEffect response: ', response)
      setUserNotes(response.data.note.noteText)
    }
    getUserNotes()
    if (userNotes != '') {
      console.log('useEffect:', hasNotes)
      setHasNotes(true)
    }
  }, [userNotes])

  const handleNoteCreate = async () => {
    const newNote = {
      user: userId,
      game: backlogId,
      noteText: noteText
    }
    const response = await axios
      .post(`http://localhost:3001/api/notes/${userId}/${backlogId}`, newNote)
      .catch((err) => console.log(err))
    setNoteId(response.data.note._id)
    setUserNotes(noteText)
    setHasNotes(true)
    console.log('note Text: ', noteText)
    console.log('create note: ', hasNotes)
    console.log('noteID: ', noteId)
  }
  const handleNoteUpdate = async () => {
    const response = await axios
      .put(`http://localhost:3001/api/notes/${noteId}`, { noteText: noteText })
      .catch((err) => console.log(err))
    setUserNotes(noteText)
    console.log('update note: ', hasNotes)
  }
  const handleChange = (event) => {
    setNoteText(event.target.value)
  }
  console.log('user note:', userNotes)
  return hasNotes ? (
    <div className="note-wrapper">
      <form onSubmit={handleNoteUpdate}>
        <textarea
          id="note"
          rows="10"
          cols="50"
          defaultValue={userNotes}
          onChange={handleChange}
        >
          {userNotes}
        </textarea>
        <button type="submit">Save Note</button>
      </form>
    </div>
  ) : (
    <div className="note-wrapper">
      <form onSubmit={handleNoteCreate}>
        <textarea
          id="note"
          rows="10"
          cols="50"
          defaultValue={noteText}
          placeholder="Enter Notes Here..."
          onChange={handleChange}
        ></textarea>
        <button type="submit">Create Note</button>
      </form>
    </div>
  )
}

export default Notes
