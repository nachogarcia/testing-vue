import Phrase from '@/domain/Phrase'

const phrase = new Phrase({
  id: 'an id',
  categories: ['a category', 'another category'],
  text: 'Some text'
})

describe('Phrase', () => {
  it('differenciates nerdy phrases', () => {
    const nerdyPhrase = new Phrase({
      id: 'another id',
      categories: ['another category', 'nerdy'],
      text: 'another text'
    })

    expect(phrase.isNerdy).toBe(false)
    expect(nerdyPhrase.isNerdy).toBe(true)
  })

  it('differenciates long phrases', () => {
    const longPhrase = new Phrase({
      id: 'another id',
      categories: ['another category', 'nerdy'],
      text: 'another reeeeeeeeeeeeeeeeeally long text'
    })

    expect(phrase.isLong).toBe(false)
    expect(longPhrase.isLong).toBe(true)
  })

})
