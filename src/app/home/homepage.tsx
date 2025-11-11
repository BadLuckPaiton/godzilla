import Image from "next/image";
import './homepage.css'
import '../components/promotion-carrusel/promotion-carrusel'
import PromotionCarrusel from "../components/promotion-carrusel/promotion-carrusel";
import GameCarrusel from "../components/game-carrusel/game-carrusel";
import ReviewList from "../review-list/review-list";

export default function HomePage(){
    return(
      <div >
        <main className="flex flex-col gap-8 row-start-2 items-center">
          <div className="home-page">
            <PromotionCarrusel />
            <GameCarrusel />
            <GameCarrusel />
            <PromotionCarrusel />
            <ReviewList />
           </div>
        </main>
      </div>
    );
}