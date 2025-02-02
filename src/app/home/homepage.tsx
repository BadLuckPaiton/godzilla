import Image from "next/image";
import './homepage.css'

export default function HomePage(){
    return(
      <div >
        <main className="flex flex-col gap-8 row-start-2 items-center">
          <div className="home-page">
            <div className="promotion-carrusel" />
            <div className="new-game">
              <h1>New Games</h1>
              <h1>-----------------------------------------------------</h1>
              <div className="list-games">
                <div className="game" />
                <div className="game" />                
                <div className="game" />                
                <div className="game" />                
                <div className="game" />                
                <div className="game" />                
                <div className="game" />                
                <div className="game" />                
                <div className="game" />                
              </div>
            </div>
            <div className="new-game">
            <h1>Friends Playing</h1>
              <h1>-----------------------------------------------------</h1>
              <div className="list-games">
                <div className="game" />
                <div className="game" />                
                <div className="game" />                
                <div className="game" />                
                <div className="game" />                
                <div className="game" />                
                <div className="game" />                
                <div className="game" />                
                <div className="game" />                
              </div>
            </div>
            <div className="promotion-carrusel" />
            <div className="review-list">  
              <div className="review" />
            </div>
           </div>
        </main>
      </div>
    );
}