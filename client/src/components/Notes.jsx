import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Notes = ({ backlogId }) => {
  const [noteText, setNoteText] = useState('')
  const [userNotes, setUserNotes] = useState('')
  const [noteId, setNoteId] = useState(null)
  let { userId } = useParams()

  useEffect(() => {
    const getUserNotes = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/notes/${userId}/${backlogId}`
      )
      setUserNotes(response.data.gameNotes.noteText)
      console.log(response)
    }
    getUserNotes()
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
    setUserNotes(noteText)
    console.log(noteText)
    setNoteId(response.data.note._id)
    console.log(noteId)
  }
  const handleNoteUpdate = async () => {
    const response = await axios.put(
      `http://localhost:3001/api/notes/${noteId}`,
      { noteText: noteText }
    )
    setUserNotes(noteText)
  }
  const handleChange = (event) => {
    setNoteText(event.target.value)
  }

  return userNotes !== [] ? (
    <div className="note-wrapper">
      <form onSubmit={handleNoteUpdate}>
        <textarea
          id="note"
          rows="10"
          cols="50"
          value={userNotes}
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
          value={noteText}
          placeholder="Enter Notes Here..."
          onChange={handleChange}
        ></textarea>
        <button type="submit">Create Note</button>
      </form>
    </div>
  )
}

export default Notes
