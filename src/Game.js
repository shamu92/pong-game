import Board from './Board'
import Paddle from './Paddle'
import { player1Keys, player2Keys } from './keys'
import Scoreboard from './Scoreboard'
import Ball from './Ball'
const gap = 10;

export default class Game {
    constructor() {
        const canvas = document.getElementById('game');
        this.width = canvas.width;
        this.height = canvas.height;
        this.context = canvas.getContext('2d');
        this.context.fillStyle = 'white';

        this.board = new Board(this.height, this.width)

        this.p1 = new Paddle(this.height, 5, "orange", player1Keys)
        this.p2 = new Paddle(this.height, this.width - gap, "mediumspringgreen", player2Keys)

        this.ball = new Ball(this.height, this.width)

        this.p1Score = new Scoreboard(205, 135)
        this.p2Score = new Scoreboard(90, 135)

    }

    render() {
        this.board.render(this.context)
        this.p1.render(this.context)
        this.p2.render(this.context)
        this.p1Score.render(this.context)
        this.p2Score.render(this.context)
        this.ball.render(this.context, this.p1, this.p2, this.p1Score, this.p2Score)

    }
}