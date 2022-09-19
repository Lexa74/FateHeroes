import { useState } from "react"

// Player
//// Карты в руке, счет, сила карт

// Enemy
//// Карты в руке, счет, сила карт

// Round
//// Номер раунда

// Колода
//// Кол-во карт 


const [player, setPlayer] = useState({cardsInHand: [], score: 0, powerCard: 0});
const [enemy, setEnemy] = useState({cardsInHand: [], score: 0, powerCard: 0});
const [round, setRound] = useState({numberRound: 0});
const [pack, setPack] = useState({countCard: 30, cards: []});


const pushPack = () => {
    const cards = Array(30).map(() => {
        return getRandomCard()
    })
    setPack({countCard: 30, cards: cards});
}

const getRandomCard = () => {
    return {power: Math.floor(Math.random() * 10)}
}

const takeCards = () => {
    // Взять 5 карт из массива Pack
    // Вернуть карты 
    const getCards = pack.slice(pack.length - 5);
    removeFromPack();
    return getCards;
}

const removeFromPack = () => {
    // Убрать из колоды 5 карт из руки
    setPack()
}

const resultRound = () => {
    
}

const startRound = () => {
// Пополняем колоду 30 карт
// У каждой карты рандомная сила (0-10)
// Берем из колоды карты
// Отдаем карты игроку и противнику 

// выдаем 5 карт игроку и удаляем из колоды

// выдать карты и удалить из колоды
// Считается сумма силы карт в руке 
// Сравниваем силы и выводим в счет
    let pack = [30];
    pack 
}