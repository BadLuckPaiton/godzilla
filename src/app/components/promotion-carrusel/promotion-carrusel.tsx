import './promotion-carrusel.css'
import Image from 'next/image'

export default function PromotionCarrusel()
{
    return(
        <div className="fill">
            <Image
                src="/Hollow.jpg"
                width={1024}
                height={1024}
                alt="Picture of the author" />
        </div>
    );
}