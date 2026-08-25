import './ChatSuggestions.css'

const suggestions = [
  { icon: '&#128269;', label: 'Buscar un libro', text: 'Quiero buscar un libro' },
  { icon: '&#128161;', label: 'Recomendame uno', text: 'Recomendame un libro' },
  { icon: '&#128218;', label: 'Clásicos', text: 'Decime 3 libros clásicos' },
  { icon: '&#128640;', label: 'Ciencia ficción', text: 'Recomendame libros de ciencia ficción' },
]

export default function ChatSuggestions({ onSuggestion }) {
  return (
    <div className="chat-suggestions">
      {suggestions.map((s, i) => (
        <button
          key={i}
          onClick={() => onSuggestion(s.text)}
          className="chat-suggestion-chip"
        >
          <span dangerouslySetInnerHTML={{ __html: s.icon }} />
          {s.label}
        </button>
      ))}
    </div>
  )
}
