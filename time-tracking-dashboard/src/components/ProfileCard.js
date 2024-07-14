
import jeremy from '../images/image-jeremy.png';


const ProfileCard = ({onClick,statusD,statusW,statusM}) => {
    return (
        <div className='profile-card'>
        <div className='profile-header'>
            
         <img src={jeremy} alt='Jeremy Robson' className='profile-pic' />
         <div className="report-label">Report for</div>
            <p>Jeremy Robson</p>
        </div>
        <ul className="timeframes">
        <li className={`timeframe ${statusD ? 'active' : ' '}`} onClick={onClick}>Daily</li>
        <li className={`timeframe ${statusW ? 'active' : ' '}`} onClick={onClick}>Weekly</li>
        <li className={`timeframe ${statusM ? 'active' : ' '}`} onClick={onClick}>Monthly</li>
      </ul>
    </div>
    );
}

export default ProfileCard;