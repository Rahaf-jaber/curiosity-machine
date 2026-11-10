import { ArrowUpRight} from 'lucide-react'
import { useState } from 'react'

function DailyCuriosity() {
  const questions = [
    {
      question: 'Why do we dream?',
      answer: 'Dreams happen during sleep as the brain remains active. They may be connected to memory, emotions, and the way our brain processes experiences.',
      fact: 'You can dream during different stages of sleep, although vivid dreams are commonly associated with REM sleep.',
    },
    {
      question: 'Why does the Moon change shape?',
      answer: 'The Moon does not actually change shape. As it orbits Earth, we see different portions of its sunlit side.',
      fact: 'The complete cycle of Moon phases takes about 29.5 days.',
    },
    {
      question: 'Can plants communicate?',
      answer: 'Plants can send and respond to chemical signals. Some release airborne chemicals when damaged, which can affect nearby plants and organisms.',
      fact: 'Some plants can also exchange resources and signals through underground fungal networks.',
    },
    {
      question: 'Why do we get goosebumps?',
      answer: 'Tiny muscles attached to hair follicles contract, making the hairs stand up. This response is triggered by cold or strong emotions.',
      fact: 'Goosebumps are a leftover response from our evolutionary ancestors, whose thicker body hair helped trap warmth.',
    },
    {
      question: 'How do birds know where to migrate?',
      answer: 'Birds use several navigation cues, including the Sun, stars, landmarks, and Earth’s magnetic field.',
      fact: 'Some migratory birds travel thousands of kilometers every year.',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const currentQuestion = questions[currentIndex]

  function showNextQuestion() {
    setCurrentIndex((currentIndex + 1) % questions.length)
    setShowAnswer(false)
  }

  return (
    <section className="daily-curiosity">

      <span className="daily-label">
        A MOMENT OF WONDER
      </span>

      <h2>Today's Curiosity</h2>

      <div className="daily-question-card">

        <span className="question-number">
          QUESTION {String(currentIndex + 1).padStart(2, '0')}
        </span>

        <h3 className="curiosity-question">
          {currentQuestion.question}
        </h3>

        {showAnswer && (
          <div className="daily-answer">

            <p>{currentQuestion.answer}</p>

            <div className="daily-fact">
              <strong>Did you know?</strong>
              <p>{currentQuestion.fact}</p>
            </div>

          </div>
        )}

        <div className="daily-buttons">

          <button
            className="answer-button"
            onClick={() => setShowAnswer(!showAnswer)}
          >
            {showAnswer ? (
              'Hide answer'
            ) : (
              <>Reveal answer <ArrowUpRight size={17} /></>
            )}
          </button>

          <button
            className="next-question-button"
            onClick={showNextQuestion}
          >
            Another question <ArrowUpRight size={17} />
          </button>

        </div>

      </div>

    </section>
  )
}

export default DailyCuriosity
