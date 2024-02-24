export default function Button({ text, callback, index }) {
  return (
    <button 
      className="btn btn-sm md:btn-lg btn-outline btn-info"
      onClick={() => callback(index)}>
      { text }
    </button>
  )
}
