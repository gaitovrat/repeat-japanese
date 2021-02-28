import hirogana from '../assets/json/hiragana.json';

let data = {}
data.hiragana = []

for(let i = 0; i < hirogana.length; i++) {
    let element = {}

    element.kana = hirogana[i].hiragana
    element.romaji = hirogana[i].romaji
    element.include = true
    
    data.hiragana.push(element)
}

export default data