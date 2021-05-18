import hiragana from './hiragana.json'
import katakana from './katakana.json'

const data = {}
data.hiragana = []
data.katakana = []

for(let i = 0; i < hiragana.length; i++) {
    let element = {}

    element.kana = hiragana[i].hiragana
    element.romaji = hiragana[i].romaji
    element.include = true
    
    data.hiragana.push(element)

    element = {}

    element.kana = katakana[i].katakana
    element.romaji = katakana[i].romaji
    element.include = true
    
    data.katakana.push(element)
}

export default data