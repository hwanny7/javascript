// play1 = document.querySelector('#player1-img')
// play2 = document.querySelector('#player2-img')
// score1 = document.querySelector('#score1')
// score2 = document.querySelector('#score2')
// choice = [document.querySelector('#rock-button'), document.querySelector('#scissors-button'), document.querySelector('#paper-button')]
// modal = document.querySelector('.modal')
// console.log(modal)
// win = {0:1, 1:2, 2:0}

// choice.forEach((element, idex) => {
//   element.addEventListener('click', (event) => {
//     event.preventDefault()
//     play1.src = element.querySelector('img').src

//     // ================ 무작위 함수
//     let idx = 0
//     const change = setInterval(function(){
//       play2.src = choice[idx % 3].querySelector('img').src
//       idx += 1
//     }, 100)
//     setTimeout(() => {
//       clearInterval(change)
//     }, 2900)

//     //================= 승부 결정
//     setTimeout(() => {
//       idx = Math.floor(Math.random() * 3)
//       play2.src = choice[idx].querySelector('img').src
//       result = ''
//       if (idex == idx){
//         console.log('비겼습니다.')
//         result = '비겼습니다!'
//       } else if (win[idex] == idx){
//         console.log('내가 이겼다!')
//         score1.innerText = Number(score1.innerText) + 1
//         result = 'player1의 승리입니다!'
//       } else {
//         console.log('니가 졌다')
//         score2.innerText = Number(score2.innerText) + 1
//         result = 'player2의 승리입니다!'
//       }
//       modal.style.display = 'flex'
//       modal.querySelector('div').innerText = result
//       modal.addEventListener('click', (event) => {
//         modal.style.display = 'none'
//       })
//     }, 3000)
//     // =============================
//   })
// })



play1 = document.querySelector('#player1-img')
play2 = document.querySelector('#player2-img')
score1 = document.querySelector('#score1')
score2 = document.querySelector('#score2')
choice = [document.querySelector('#rock-button'), document.querySelector('#scissors-button'), document.querySelector('#paper-button')]
modal = document.querySelector('.modal')
console.log(modal)
win = {0:1, 1:2, 2:0}


choice.forEach((element, idex) => {
  element.addEventListener('click', (event) => {
    event.preventDefault()
    play1.src = element.querySelector('img').src

    // ================ 무작위 함수
    let idx = 0
    const change = setInterval(function(){
      play2.src = choice[idx % 3].querySelector('img').src
      idx += 1
    }, 100)
    setTimeout(() => {
      clearInterval(change)
    }, 2900)

    //================= 승부 결정
    setTimeout(() => {
      idx = Math.floor(Math.random() * 3)
      play2.src = choice[idx].querySelector('img').src
      result = ''
      if (idex == idx){
        console.log('비겼습니다.')
        result = '비겼습니다!'
      } else if (win[idex] == idx){
        console.log('내가 이겼다!')
        score1.innerText = Number(score1.innerText) + 1
        result = 'player1의 승리입니다!'
      } else {
        console.log('니가 졌다')
        score2.innerText = Number(score2.innerText) + 1
        result = 'player2의 승리입니다!'
      }
      modal.style.display = 'flex'
      modal.querySelector('div').innerText = result
      modal.addEventListener('click', (event) => {
        modal.style.display = 'none'
      })
    }, 3000)
    // =============================
  })
})





