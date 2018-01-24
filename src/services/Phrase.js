import axios from 'axios'
import Phrase from '@/domain/Phrase'

const URL = 'https://api.icndb.com/jokes/' //Future environment variable

const parse = data => new Phrase({
  id: data.id,
  categories: data.categories,
  text: data.joke
})

class PhraseService {
  async getRandomPhrases(numberOfPhrases) {
    const response = await axios.get(URL + 'random/' + numberOfPhrases)
    return response.data.value.map( data => parse(data) )
  }

  async getMostImportantPhrase() {
    const response = await axios.get(URL + '503')
    return parse(response.data.value)
  }
}

export default new PhraseService()
