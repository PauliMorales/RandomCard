import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import users from './assets/users.json'
import shuffle from './assets/shuffle.svg'

function App() {
  const [randomNumber, setRandomNumber] = useState(0);


  useEffect(() => {
    return () => {
      const random = getRandomNumber()
      setRandomNumber(random)
    }
  }, [])

  const getRandomNumber = () => {
    return (Math.random() * (users.length - 1) ).toFixed(0)
  }

  const setRandom = () => {
    const randomNum = getRandomNumber()
    if (randomNum !== randomNumber && randomNum < users.length) {
      setRandomNumber(randomNum)
    }
  }

  return (
    <div className={`app bg-color-${randomNumber}`}>
      <Card colorNumber={randomNumber} user={users[randomNumber]} />

      <img onClick={() => setRandom()} width={50} src={shuffle} alt="" />
    </div>
  )
}

export default App
