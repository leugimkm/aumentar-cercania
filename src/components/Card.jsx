import { useState } from "react";
import data from "../data/data.json"

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
    <div className="card w-5/6 md:w-2/6 bg-base-300/75 shadow-xl h-[460px] font-mono font-semibold">
      <div className="card-body items-center text-lg md:text-2xl">
        <h2 className="card-title text-sky-300 md:text-2xl">
          Pregunta { (index + 1).toString().padStart(2, '0') }
        </h2>
        <p className="text-center mt-3">{ content }</p>
        <div className="card-actions justify-center">
          <button 
            className="btn btn-sm md:btn-lg btn-outline btn-info"
            onClick={() => updateIndex(-1)}>
            anterior
          </button>
          <button
            className="btn btn-sm md:btn-lg btn-outline btn-info"
            onClick={() => updateIndex(1)}>
            siguiente
          </button>
        </div>
      </div>
    </div>
  )
}