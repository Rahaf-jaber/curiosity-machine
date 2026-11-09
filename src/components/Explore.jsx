
import { useState } from 'react'

import {
  Atom,
  Sparkles,
  Brain,
  Sun
} from 'lucide-react'

import CategoryCard from './CategoryCard'

function Explore() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedQuestion, setSelectedQuestion] = useState(null)

  const categories = [
    {
      number: '01',
      title: 'Science',
      description: 'Discover the strange, beautiful rules behind our universe.',
      color: '#E6EAF2',
      icon: Atom,
      linkText: 'Explore science',
      questions: [
        {
          question: 'Why is the sky blue?',
          answer: 'Sunlight contains different colors. Blue light scatters more in the atmosphere than most other colors, making the sky appear blue.',
          fact: 'The sky can appear red or orange during sunrise and sunset because sunlight travels through more atmosphere.',
        },
        {
          question: 'Can humans live on Mars?',
          answer: 'Potentially, yes. But humans would need protected habitats, oxygen, water, and reliable sources of food.',
          fact: 'A day on Mars is about 24 hours and 37 minutes.',
        },
        {
          question: 'What makes the stars shine?',
          answer: 'Stars produce energy through nuclear fusion in their cores, releasing enormous amounts of light and heat.',
          fact: 'Our Sun is actually a star!',
        },
      ],
    },

    {
      number: '02',
      title: 'Creativity',
      description: "Challenge the obvious. Imagine what doesn't exist yet.",
      color: '#FBE9DE',
      icon: Sparkles,
      linkText: 'Get inspired',
      questions: [
        {
          question: 'Can creativity be learned?',
          answer: 'Yes! Creativity can be developed through practice, curiosity, experimentation, and exploring different perspectives.',
          fact: 'Trying something unfamiliar can help you discover new ways of thinking.',
        },
        {
          question: 'Why do we get ideas in the shower?',
          answer: 'Relaxing activities can allow the mind to wander, helping different thoughts connect in unexpected ways.',
          fact: 'This experience is sometimes called the shower effect.',
        },
        {
          question: 'What if imagination had no limits?',
          answer: 'We could explore possibilities beyond what currently exists and use those ideas to invent new things.',
          fact: 'Many inventions began as ideas that once seemed impossible.',
        },
      ],
    },

    {
      number: '03',
      title: 'Psychology',
      description: 'Explore the curious ways we think, feel, and behave.',
      color: '#EBE4F3',
      icon: Brain,
      linkText: 'Look within',
      questions: [
        {
          question: 'Why do we dream?',
          answer: 'Dreams are associated with brain activity during sleep. They may involve memory processing, emotions, and imagination.',
          fact: 'You can experience dreams during several stages of sleep, not only REM sleep.',
        },
        {
          question: 'Why do memories change over time?',
          answer: 'Memory is not a perfect recording. Recalling an experience can sometimes change how we remember it.',
          fact: 'Each time you remember something, your brain may reconstruct parts of that memory.',
        },
        {
          question: 'Can music affect our mood?',
          answer: 'Yes. Music can influence emotions, attention, and even how energetic or relaxed we feel.',
          fact: 'Some songs can bring back vivid memories because music and memory are closely connected.',
        },
      ],
    },

    {
      number: '04',
      title: 'Life & Mindset',
      description: 'Small questions that open up surprisingly big ideas.',
      color: '#E5EBDD',
      icon: Sun,
      linkText: 'Reflect a little',
      questions: [
        {
          question: 'Why is change sometimes difficult?',
          answer: 'Change can involve uncertainty and breaking familiar routines. This can make new situations feel uncomfortable.',
          fact: 'Small, consistent steps can make a new habit easier to build.',
        },
        {
          question: 'Do small habits really make a difference?',
          answer: 'Yes. Repeated small actions can accumulate over time and contribute to meaningful long-term progress.',
          fact: 'Consistency is often more important than doing everything perfectly.',
        },
        {
          question: 'What makes a day feel meaningful?',
          answer: 'Meaning can come from relationships, personal growth, helping others, and doing things that align with your values.',
          fact: 'Meaningful experiences do not always have to be big or extraordinary.',
        },
      ],
    },
  ]

  function openCategory(category) {
    setSelectedCategory(category)
    setSelectedQuestion(null)
  }

  function closeCategory() {
    setSelectedCategory(null)
    setSelectedQuestion(null)
  }

  return (
    <section className="explore" id="explore">

      <div className="explore-heading">
        <div>
          <span>WHERE SHALL WE WANDER?</span>

          <h2>
            Explore your curiosity<span>.</span>
          </h2>
        </div>

        <p>
          Follow a question. Find a new
          <br />
          perspective.
        </p>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <CategoryCard
            key={category.number}
            {...category}
            onClick={() => openCategory(category)}
          />
        ))}
      </div>

      {selectedCategory && (
        <div className="selected-category">

          <h3>{selectedCategory.title}</h3>

          <p>{selectedCategory.description}</p>

          <h4>Questions to get you curious:</h4>

          <ul>
            {selectedCategory.questions.map((item, index) => (
              <li key={index}>
                <button
                  className="question-button"
                  onClick={() => setSelectedQuestion(item)}
                >
                  {item.question} ↗
                </button>
              </li>
            ))}
          </ul>

          {selectedQuestion && (
            <div className="question-answer">

              <h4>{selectedQuestion.question}</h4>

              <p>{selectedQuestion.answer}</p>

              <p>
                <strong>Did you know?</strong>
                {' '}{selectedQuestion.fact}
              </p>

              <button
                className="back-button"
                onClick={() => setSelectedQuestion(null)}
              >
                Back to questions
              </button>

            </div>
          )}

          <button
            className="close-category"
            onClick={closeCategory}
          >
            Close category
          </button>

        </div>
      )}

    </section>
  )
}

export default Explore
