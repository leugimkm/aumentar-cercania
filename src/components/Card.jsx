import { useState } from "react";
import Button from "./Button";
import data from "../data/data.json"

function CardItem({ index, max, content, _f}) {
  return (
    <div className={
      `card w-5/6 md:w-2/6 bg-base-300/75 shadow-xl h-[460px]
      font-mono font-semibold`
    }>
    <div className="card-body items-center text-lg md:text-2xl">
      <h2 className="card-title text-sky-300 md:text-2xl">
        Pregunta { (index + 1).toString().padStart(2, '0') }/{max}
      </h2>
      <p className="text-center mt-3">{ content }</p>
      <div className="card-actions justify-center">
        <Button text="anterior" fn={_f} n={-1}/>
        <Button text="siguiente" fn={_f} n={1}/>
      </div>
    </div>
  </div>
  )
}

export default function Card() {
  const [index, setIndex] = useState(0);
  const updateIndex = (increment) => {
    const newIndex = index + increment;
    if (newIndex >= 0 && newIndex < data.length) {
      setIndex(newIndex);
    }
  }
  const content = data[index];
  return (
    <CardItem
      index={index}
      max={data.length}
      content={content}
      _f={updateIndex}
    />
  )
}
