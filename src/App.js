import React, { useState, useEffect } from 'react'
import randomWords from 'random-words'

const NUMBER_OF_WORDS = 200
const SECONDS = 6
const App = () => {
  const [words, setWords] = useState([])
  const [seconds, setSeconds] = useState(SECONDS)

  const [disBtn, setDisBtn] = useState(false)



  useEffect(() => {
    setWords(genrateWords())
  }, [])

  const genrateWords = () => {
    return new Array(NUMBER_OF_WORDS).fill(null).map((d, i) => randomWords())
  }

  const handleStart = () => {
    setDisBtn(true)
    let interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 0) {
          clearInterval(interval)
          // return setSeconds(0)
        } else {
          return prev - 1
        }

      })

    }, 1000);
  }



  return (
    <div>
      <div className="section pb-1 pt-1">
        <div className="card">
          <div className="card-content">
            <div className="content">
              {words.map((w, i) => (
                <>
                  <span key={i}>
                    <span >{w}</span>
                    {" "}
                  </span>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="control is-expanded section pt-0">
        <div className="is-size-1 has-text-centered has-text-primary">
          <h2>{seconds}</h2>
        </div>
        <input type="text" className='input' />
        <div className="section">
          <div className="button button is-info is-fullwidth"
            onClick={handleStart}
          >
            Start

          </div>
        </div>
      </div>

    </div>
  )
}

export default App
