import Image from 'next/image'
import Games from '../components/game/game'
import './profile.css';
import Game from '../components/game/game';
export default function Page(){
    return(
      <div >
        <main className="flex flex-col gap-8 row-start-2">
            <div className='container'>
                <div className="profile-display-grip">
                    <div className='profile-picture-grid'>
                        <Image
                            className="friend-profile-picture"
                            src="/Hollow.jpg"
                            width={150}
                            height={150}
                            alt="Picture of the author" />
                    </div>
                    <div className='profile-display-information'>
                        <h2>SuperUserNameDelChuy</h2>
                        <h2>Soy un jugador del Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h2>
                    </div>
                </div>
                <div className='profile-overral-games'>
                    <div className='profile-game'>
                        <h2>Currently Playing</h2>
                        <div className='profile-current-games'>
                            <Games></Games>
                            <Games></Games>
                            <Games></Games>
                            <Games></Games>
                            <Games></Games>
                        </div>
                        <h2>Last beaten</h2>
                        <div className='profile-last-game'>
                            <div className='profile-last-game-pic'>
                                <Games></Games>
                            </div>
                            <div className='profile-last-game-info'>
                                <h2>Grade: 7</h2>
                                <h2>Hours: 8</h2>
                                <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h2>
                            </div>
                        </div>
                        <h2>Review</h2>
                        <div className='review-list'></div>
                    </div>
                    <div className='profile-favorite-games'>
                        <Game></Game>
                        <Game></Game>
                        <Game></Game>
                    </div>
                </div>
            </div>
        </main>
      </div>
    );
}