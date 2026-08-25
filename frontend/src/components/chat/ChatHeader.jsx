import './ChatHeader.css'

export default function ChatHeader() {
  return (
    <div className="chat-header">
      <div className="chat-header-icon">
        <span>&#128214;</span>
      </div>
      <h2 className="chat-header-title">Preguntale a BookApp</h2>
      <p className="chat-header-subtitle">Consultá por cualquier libro y guardalo en tu lista</p>
    </div>
  )
}
