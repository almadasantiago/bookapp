import BookResultCard from './BookResultCard'
import './ChatMessage.css'

export default function ChatMessage({ message, onSaveBook }) {
  const isUser = message.role === 'user'

  return (
    <div className="chat-message" data-user={isUser || undefined}>
      <div className="chat-bubble" data-user={isUser || undefined}>
        {message.book ? (
          <BookResultCard book={message.book} onSave={onSaveBook} />
        ) : (
          <p className="chat-text">{message.text}</p>
        )}
      </div>
    </div>
  )
}
