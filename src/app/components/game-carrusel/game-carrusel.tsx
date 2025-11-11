import './game-carrusel.css'
import Game from '../game/game'

export default function GameCarrusel(){
    return(
        <div className="games-carrusel">
        <h1>New Games</h1>
        <h1>-----------------------------------------------------</h1>
        <div className="list-games">
          <Game/>             
          <Game/>             
          <Game/>             
          <Game/>             
          <Game/>             
          <Game/>             
          <Game/>             
          <Game/>             
        </div>
      </div>
    );
}