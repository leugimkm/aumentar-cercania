import { useState } from "react"
import CardItem from "./CardItem"
import data from "../data/data.json"

export default function Card() {
  const [index, setIndex] = useState(0)
  const updateIndex = (increment) => {
    const newIndex = index + increment
    if (newIndex >= 0 && newIndex < data.length) setIndex(newIndex);
  }
  const content = data[index]
  return (
    <CardItem
      index={index}
      max={data.length}
      content={content}
      callback={updateIndex}
    />
  )
}
