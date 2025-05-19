import Image from "next/image";
import './homepage.css'
import '../promotion-carrusel/promotion-carrusel'
import PromotionCarrusel from "../promotion-carrusel/promotion-carrusel";
import GameCarrusel from "../game-carrusel/game-carrusel";

export default function HomePage(){
    return(
      <div >
        <main className="flex flex-col gap-8 row-start-2 items-center">
          <div className="home-page">
            <PromotionCarrusel />
            <GameCarrusel />
            <GameCarrusel />
            <PromotionCarrusel />

            <div className="review-list">  
              <div className="review" />
            </div>
           </div>
        </main>
      </div>
    );
}