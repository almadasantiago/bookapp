import './BookResultCard.css'

export default function BookResultCard({ book, onSave }) {
  return (
    <div className="book-card">
      <h3 className="book-card-title">{book.title}</h3>
      <p className="book-card-meta">{book.author} &middot; {book.year}</p>
      <p className="book-card-synopsis">{book.synopsis}</p>
      <button onClick={() => onSave(book)} className="book-card-btn">
        + Agregar a mi lista
      </button>
    </div>
  )
}
