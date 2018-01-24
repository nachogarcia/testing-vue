import Vue from 'vue'
import { shallow } from 'vue-test-utils'
import PhraseList from '@/components/PhraseList'
import phraseService from '@/services/Phrase'
import Phrase from '@/domain/Phrase'

const aPhrase = new Phrase({
  id: 'an id',
  categories: ['a category', 'another category'],
  text: 'some text'
})

const somePhrases = [ aPhrase, aPhrase ]

describe('PhraseList', () => {
  let wrapper

  beforeEach( () => {
    phraseService.getMostImportantPhrase = jest.fn( () => Promise.resolve(aPhrase))
    phraseService.getRandomPhrases = jest.fn( () => Promise.resolve(somePhrases))
    wrapper = shallow(PhraseList)
  })

  it('shows the most important phrase', () => {
    const phrase = wrapper.find('.important')

    expect(phrase.text()).toEqual(aPhrase.text)
  })

  it('shows random phrases', () => {
    const phrases = wrapper.findAll('li')

    expect(phrases.length).toBe(somePhrases.length)
  })
})
