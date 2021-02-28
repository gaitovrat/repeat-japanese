import hirogana from '../assets/json/hiragana.json'
import katakana from '../assets/json/katakana.json'

const data = {}
data.hiragana = []
data.katakana = []

for(let i = 0; i < hirogana.length; i++) {
    let element = {}

    element.kana = hirogana[i].hiragana
    element.romaji = hirogana[i].romaji
    element.include = true
    
    data.hiragana.push(element)

    element = {}

    element.kana = katakana[i].katakana
    element.romaji = katakana[i].romaji
    element.include = true
    
    data.katakana.push(element)
}

export default data