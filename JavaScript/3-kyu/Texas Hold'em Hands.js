var Order = "23456789TJQKA"
var Types = [
  'nothing',
  'pair',
  'two pair',
  'three-of-a-kind',
  'straight',
  'flush',
  'full house',
  'four-of-a-kind',
  'straight-flush'
]

function rank(hand) {
  let cards = hand.map(card => { return { val: card[0], suite: card[1] } })
  let sorted = cards.map(card => card.val).sort((a,b) => Order.indexOf(a) - Order.indexOf(b)).join('')

  let match = regex => sorted.match(regex)
  
  let cardRank = c => {
    let x = Order.indexOf(c)
    return x < 0 ? '' : (x > 9 ? '' : '0') + x
  }
  
  let kickers = (groups,pos) => pos.map(p => cardRank(groups[p])).join('')
  
  let r = n => cardRank(sorted[n])
  let all = r(4) + r(3) + r(2) + r(1) + r(0)

  let straight = Order.includes(sorted),
  flush = cards.every(card => card.suite === cards[0].suite),
  four = match(/(.)?(.)\2{3,3}(.)?/),
  fullhouse = match(/^(.)\1{1,2}(.)\2{1,2}$/),    
  three = match(/(.)?(.)?(.)\3{2,2}(.)?(.)?/),     
  twopair = match(/(.)?(.)\2(.)?(.)\4(.)?/),        
  pair = match(/(.)?(.)?(.)?(.)\4(.)?(.)?(.)?/)
  if (straight && flush) return '8.' + all
  if (four)      return '7.' + kickers(four, [2,3,1])
  if (fullhouse) return '6.' + r(2) + (r(1) === r(2) ? r(3) : r(1))
  if (flush)     return '5.' + all
  if (straight)  return '4.' + all
  if (three)     return '3.' + kickers(three, [3,5,4,2,1])
  if (twopair)   return '2.' + kickers(twopair, [4,2,5,3,1])
  if (pair)      return '1.' + kickers(pair, [4,7,6,5,3,2,1])
  return '0.' + all
}

function allHands(cards) {
  let hands = []
  
  const reduce = (arr) => {
    if (arr.length === 5) {
      hands.push(arr)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let copy = [...arr]
        copy.splice(i,1)
        reduce(copy)
      }
    }
  }
  
  reduce(cards)
  return hands
}

function hand(...cards) { 

  let allCards = [].concat(...cards).map(c => c.replace('10','T'))
  
  let bestHand = allHands(allCards).map(hand => rank(hand)).sort((a,b)=>b-a)[0].split('.')
  
  return {
    type: Types[bestHand[0]],
    ranks: bestHand[1].match(/.{2}/g).map(v => Order[parseInt(v)].replace('T','10') )
  }
}
