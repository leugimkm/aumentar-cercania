import Button from "./Button"

const buttons = [
  {text: "anterior", index: -1},
  {text: "siguiente", index: 1},
]

export default function CardItem({ index, max, content, callback }) {
  return (
    <div className={`
      card w-5/6 md:w-2/6 bg-base-300/75 shadow-xl h-[460px]
      font-mono font-semibold
    `}>
    <div className="card-body items-center text-lg md:text-2xl">
      <h2 className="card-title text-sky-300 md:text-2xl">
        Pregunta {(index + 1).toString().padStart(2, '0')}/{max}
      </h2>
      <p className="text-center mt-3">{content}</p>
      <div className="card-actions justify-center">
        {buttons.map(({text, index}, idx) => (
          <Button
            key={idx}
            text={text}
            callback={callback}
            index={index}
          />
        ))}
      </div>
    </div>
  </div>
  )
}
