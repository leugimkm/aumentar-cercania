export default function Button({ text, fn, n}) {
  return (
    <button 
      className="btn btn-sm md:btn-lg btn-outline btn-info"
      onClick={() => fn(n)}>
      { text }
    </button>
  )
}
