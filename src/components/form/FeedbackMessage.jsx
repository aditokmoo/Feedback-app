function RatingMessage({handleMessageChange, handleSubmit, text, btnDisabled}) {
  return (
    <div className="rating-message">
        <h2>Anything that can be improved?</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" id="text" value={text} onChange={handleMessageChange} placeholder="Your feedback" />
            <button type="submit" disabled={btnDisabled}>Submit</button>
        </form>
    </div>
  )
}

export default RatingMessage