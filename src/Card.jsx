
import profilePic from './assets/profile.jpg';
function Card(){
    return(
        <div className='Card'>
            <h1>renu mehta</h1>
        <img className='Card-img' src= {profilePic} alt='picture'></img>
        <h2 className='Card-title'>Dog Talk</h2>
        <p>It is my youtube channel</p>
        </div>
    );
}
export default Card;