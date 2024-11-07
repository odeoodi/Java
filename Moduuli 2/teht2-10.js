'use strict';

const candidates = []

const howMany = prompt('Tell me the number of candidates.')

let candMade = 0
do {
  const whoDis = prompt(`Tell me the name of the ${candMade+1}. candidate`)
  candidates.push({Name:whoDis,Votes:'0'})
  candMade++
} while (candMade < howMany)

const voters = prompt('How many voters are there?')
let voted = 0
let emptyVote = 0
do {
  const votedFor =  prompt('Who are you voting for?')
  for (let i=0; i<candidates.length;i++) {
    if (candidates[i]['Name'] === votedFor) {
      candidates[i]['Votes']++
    }
  }
  if (votedFor === '') {
      emptyVote++
    }
  voted++
} while (voted < voters)
let winner = candidates[0]['Name']
let winVotes = 0

for (let i=0; i<candidates.length;i++) {
  console.log(candidates[i]['Name']+': '+ candidates[i]['Votes']+' voted for them.')
  if ((i+1 === candidates.length) && (candidates[i]['Votes']>candidates[i-1]['Votes'])) {
        winner = candidates[i]['Name']
        winVotes = candidates[i]['Votes']
  }
  else if (candidates[i]['Votes']>candidates[i+1]['Votes']) {
    winner = candidates[i]['Name']
    winVotes = candidates[i]['Votes']
  }
}

console.log('Winner is ' + winner + '. By ' + winVotes + ' votes.')
console.log('There were ' + emptyVote + ' empty votes.')

