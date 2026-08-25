import { useState } from 'react'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import ChatSuggestions from './ChatSuggestions'
import ChatMessages from './ChatMessages'
import './ChatContainer.css'

export default function ChatContainer() {
  const [messages, setMessages] = useState([])

  const handleSend = (text) => {
    setMessages((prev) => [...prev, { role: 'user', text }])

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: 'ai', text: `Buscando información sobre "${text}"...` },
      ])
    }, 800)
  }

  const handleSaveBook = (book) => {
    console.log('Guardar en wishlist:', book)
  }

  const hasMessages = messages.length > 0

  return (
    <div className="chat-container">
      {!hasMessages && <ChatHeader />}

      {hasMessages ? (
        <ChatMessages messages={messages} onSaveBook={handleSaveBook} />
      ) : (
        <div className="chat-container-suggestions">
          <ChatSuggestions onSuggestion={handleSend} />
        </div>
      )}

      <div className="chat-container-input">
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  )
}
