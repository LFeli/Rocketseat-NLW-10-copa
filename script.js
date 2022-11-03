function createGame(player1, hour,player2){
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}">
    </li>
    `
}

let delay = -0.3;

function createCard(date,day,game){
    delay = delay + 0.3;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
           ${game}
        </ul>
    </div>
    `
}

document.querySelector('#cards').innerHTML =
    createCard('21/11', 'quinta',createGame('switzerland','07:00','cameroon') +
    createGame('portugal','13:00','argentina') +
    createGame('brazil','16:00','serbia')) +

    createCard('28/11','segunda',createGame('japan','10:00','cameroon') +
        createGame('brazil','13:00','switzerland') +
        createGame('portugal','16:00','colombia')
    )