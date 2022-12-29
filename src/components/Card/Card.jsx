import "./Card.css";
import SvgIcon from "../SvgIcon/SvgIcon";

function Card(props) {
  const { user, colorNumber } = props;

  return (
    <div className="card__container">
      <h3
        className={`color-${colorNumber}`}
      >{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
      <img src={user.picture.large} alt="" />
      <ul>
        <li className={`color-${colorNumber}`}>
          <SvgIcon iconType="mail" colorNumber={colorNumber} /> {user.email}
        </li>
        <li className={`color-${colorNumber}`}>
          <SvgIcon iconType="phone" colorNumber={colorNumber} />
          {user.phone}
        </li>
        <li className={`color-${colorNumber}`}>
          <SvgIcon colorNumber={colorNumber} />
          {`${user.location.country} ${user.location.state} ${user.location.city}`}
        </li>
      </ul>
    </div>
  );
}

export default Card;
