import { useState } from "react"

const Props = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count +1)
  }
  const decrement = () => {
    if (count > 0) {
      setCount(count -1)
    }
  }
  return (
    <div>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
          <button onClick={increment}>Increment</button>
          <p>count is {count}</p>
          <button onClick={decrement}>Decrement</button>
        </div>
    </div>
  )
}

export default Props