import Image from 'next/image'
import './game.css'

export default function Game(){
    return(
        <div className="game">
            <Image
                src="/Hollow.jpg"
                width={1024}
                height={1024}
                alt="Picture of the author" />
        </div>
    );
}