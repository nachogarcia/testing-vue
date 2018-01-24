<template>
  <div>
    <h1>Important Phrase</h1>
    <p class="phrase important">
      {{ importantPhrase.text }}
    </p>
    <h1>Random phrases</h1>
    <ul>
      <li :key="phrase.id" v-for="phrase in randomPhrases">
        {{ phrase.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import phraseService from '@/services/Phrase'
const numberOfPhrases = 5

export default {
  name: 'PhraseList',

  data: () => ({
    importantPhrase: {},
    randomPhrases: []
  }),

  async created () {
    this.importantPhrase = await phraseService.getMostImportantPhrase()
    this.randomPhrases = await phraseService.getRandomPhrases(numberOfPhrases)
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
.phrase {
  font-style: italic;
}
.important{
  color: red;
}
</style>
