import style from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={style.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
