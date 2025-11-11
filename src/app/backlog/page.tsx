import Form from 'next/form'
import Game from "../components/game/game";
import './backlog.css';
export default function Page(){
    return(
      <div >
        <main className="flex flex-col gap-8 row-start-2">
          <div>
            What adventures is next?
          </div>
          <div>
          <Form action="/search">
            <input name="query" className='search-game'/>
          </Form>
          </div>
          <div className="container">
            <Game></Game>
            <Game></Game>
            <Game></Game>
            <Game></Game>
            <Game></Game>
            <Game></Game>
            <Game></Game>
            <Game></Game>
            <Game></Game>
            <Game></Game>
            <Game></Game>
            <Game></Game>
            <Game></Game>
            <Game></Game>
            <Game></Game>
            <Game></Game>
            <Game></Game>
            <Game></Game>
          </div>
        </main>
      </div>
    );
}