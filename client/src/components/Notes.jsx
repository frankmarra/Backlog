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
        .get(`/notes/${userId}/${backlogId}`)
        .catch((err) => console.log(err))
      setUserNotes(response.data.note.noteText)
      setNoteId(response.data.note._id)
    }
    getUserNotes()
    if (userNotes != '') {
      setHasNotes(true)
    }
  }, [userNotes])

  const handleNoteCreate = async (event) => {
    const newNote = {
      user: userId,
      game: backlogId,
      noteText: noteText
    }
    const response = await axios
      .post(`/notes/${userId}/${backlogId}`, newNote)
      .catch((err) => console.log(err))
    setNoteId(response.data.note._id)
    setUserNotes(noteText)
    setHasNotes(true)
  }
  const handleNoteUpdate = async (event) => {
    const response = await axios
      .put(`/notes/${noteId}`, { noteText: noteText })
      .catch((err) => console.log(err))
    setUserNotes(noteText)
  }

  const deleteNote = async () => {
    const response = await axios
      .delete(`/notes/${noteId}`)
      .catch((err) => console.log(err))
    setHasNotes(false)
    setUserNotes('')
  }
  const handleChange = (event) => {
    setNoteText(event.target.value)
  }

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
        <button className="save-note-button" type="submit">
          Save Note
        </button>
      </form>
      <button
        className="delete-note-button"
        onClick={() => {
          deleteNote()
        }}
      >
        Delete Note?
      </button>
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
        <button className="create-note-button" type="submit">
          Create Note
        </button>
      </form>
    </div>
  )
}

export default Notes
