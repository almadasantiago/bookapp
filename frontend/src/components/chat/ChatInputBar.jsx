import './ChatInputBar.css'

export default function ChatInputBar({ hasMessage }) {
  return (
    <div className="chat-input-bar">
      <span className="chat-input-badge">Preguntar</span>
      <button
        type="submit"
        disabled={!hasMessage}
        className="send-btn"
        data-active={hasMessage || undefined}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 0V12M8 12L3 7M8 12L13 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}
