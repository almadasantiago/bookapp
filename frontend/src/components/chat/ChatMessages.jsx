import { useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'
import './ChatMessages.css'

export default function ChatMessages({ messages, onSaveBook }) {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="chat-messages">
      <div className="chat-messages-list">
        {messages.map((msg, i) => (
          <ChatMessage key={i} message={msg} onSaveBook={onSaveBook} />
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  )
}
