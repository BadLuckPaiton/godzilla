import './profile.css';
import Image from 'next/image'
import Game from '../components/game/game';
import Friend from '../components/friend/friend'
export default function Page(){
    return(
      <div >
        <main className="flex flex-col gap-8 row-start-2">
            <div className='container'>
                <div className='game-overral'>
                    <div className="game-display">
                        <Game ></Game>
                    </div>
                    <h2>Played it</h2>
                    <h2>Global Rate: 7.0</h2>
                </div>
                <div className='game-Info'>
                    <h3>Hollow Knight: Silksong</h3>
                    <h2>Description:</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.:</p>
                    <h2>Developer: Rock Star</h2>
                    <h2>Publisher: Rock Star</h2>
                    <Friend></Friend>
                    <Friend></Friend>
                    <Friend></Friend>
                </div>
                <div className='game-rate'>
                    <div className='box-container'>
                        <div className='box-first-step'>
                            <div className='review-icons'>
                                <Image
                                src="/game-controller.png"
                                width={1024}
                                height={1024} 
                                alt="" />
                                <h2>Played it</h2>
                            </div>
                            <div className='review-icons'>
                                <Image
                                src="/hearth.png"
                                width={1024}
                                height={1024}
                                alt="" />
                                <h2>Love it</h2>
                            </div>
                            <div className='review-icons'>
                                <Image
                                src="/bucket.png"
                                width={1024}
                                height={1024}
                                alt="" />
                                <h2>bucket lists</h2>
                            </div>
                        </div>
                        <div className='box-third-step'>
                            <div className='rated'>
                                <div className='rated-icon'>
                                    <Image
                                        src="/hearth.png"
                                        width={1024}
                                        height={1024} 
                                        alt=""/>
                                </div>
                                <div className='rated-icon'>
                                    <Image
                                        src="/hearth.png"
                                        width={1024}
                                        height={1024} 
                                        alt=""/>
                                </div>
                                <div className='rated-icon'>
                                    <Image
                                        src="/hearth.png"
                                        width={1024}
                                        height={1024} 
                                        alt=""/>
                                </div>
                                <div className='rated-icon'>
                                    <Image
                                        src="/hearth.png"
                                        width={1024}
                                        height={1024} 
                                        alt=""/>
                                </div>
                                <div className='rated-icon'>
                                    <Image
                                        src="/hearth.png"
                                        width={1024}
                                        height={1024} 
                                        alt=""/>
                                </div>
                                <div className='rated-icon'>
                                    <Image
                                        src="/hearth.png"
                                        width={1024}
                                        height={1024} 
                                        alt=""/>
                                </div>
                                <div className='rated-icon'>
                                    <Image
                                        src="/hearth.png"
                                        width={1024}
                                        height={1024} 
                                        alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className='second-first-step'>
                            <h2>Write what you think about the game!</h2>
                        </div>
                        <div className='second-first-step'>
                            <h2>Write what you think about the game!</h2>
                        </div>
                    </div>
                </div>
            </div>
        </main>
      </div>
    );
}