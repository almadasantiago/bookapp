import { useState } from 'react'
import ChatInputBar from './ChatInputBar'
import './ChatInput.css'

export default function ChatInput({ onSend }) {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      onSend(message.trim())
      setMessage('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="chat-input-form">
      <div className="chat-input-box">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Preguntá por un libro..."
          rows={1}
          className="chat-input-textarea"
        />
        <ChatInputBar hasMessage={message.trim().length > 0} />
      </div>
    </form>
  )
}
