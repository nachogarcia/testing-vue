import phraseService from '@/services/Phrase'
import Phrase from '@/domain/Phrase'

describe('Phrase service', () => {
  it('gets random phrases', async () => {
    const numberOfPhrases = 5

    const phrases = await phraseService.getRandomPhrases(numberOfPhrases)

    expect(phrases).toHaveLength(numberOfPhrases)
    phrases.forEach(phrase => {
      expect(phrase).toBeInstanceOf(Phrase)
      expect(phrase.id).toBeDefined()
      expect(phrase.categories).toBeInstanceOf(Array)
      expect(typeof phrase.text).toBe('string')
    })
  })

  it('gets the most important phrase', async () => {
    const phrase = await phraseService.getMostImportantPhrase()

    expect(phrase).toMatchSnapshot()
  })
})
