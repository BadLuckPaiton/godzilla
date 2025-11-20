import Image from 'next/image'
import './friend.css'

export default function Friend(){
    return(
        <div className="friend-box">
            <Image
                className="friend-profile-picture"
                src="/Hollow.jpg"
                width={125}
                height={150}
                alt="Picture of the author" />
            <div className='friend-titles'>
                <p>This is the top textssssssssss.</p>
                <p>This is the top text.</p>
            </div>

        </div>
    );
}