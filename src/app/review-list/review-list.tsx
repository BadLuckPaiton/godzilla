import "./review-list.css"
import Game from "../components/game/game";

export default function ReviewList(){
    return(
<div className="card-list">
<div className="card">
        <div className="content">
        <img className="card-image" src="Hollow.jpg" alt="Image" />
            <div className="text">
                <h2 className="title">Card Title 1</h2>
                <p className="description">Card Title 1</p>
                <p className="description">This is the description for card 1.</p>
            </div>

        </div>
    </div>

    <div className="card">
        <div className="image-container">
            <img src="Hollow.jpg" alt="Image" />
            <h2 className="title">Card Title 1</h2>
            <p className="description">
            Description text for card 1 goes here.
        </p>
        </div>
       
    </div>
    <div className="card">
        <div className="image-container">
            <img src="Hollow.jpg" alt="Image" />
            <h2 className="title">Card Title 1</h2>
        </div>
        <p className="description">
            Description text for card 1 goes here.
        </p>
    </div>

    <div className="card">
        <div className="image-container">
            <img src="Hollow.jpg" alt="Image" />
            <h2 className="title">Card Title 1</h2>
        </div>
        <p className="description">
            Description text for card 1 goes here.
        </p>
    </div>
</div>

    );
} 