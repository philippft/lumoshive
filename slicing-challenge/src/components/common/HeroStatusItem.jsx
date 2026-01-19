import ButtonLabel from "./ButtonLabel";

export default function HeroStatusItem({ pillStatus, status, text, number }) {
  return (
    <div className="mini-list__item">
      <ButtonLabel className={`pill ${pillStatus}`} text={status} />
      {/* <span className={`pill ${pillStatus}`}>{status}</span> */}
      <span className="mini-list__text ">{text}</span>
      <span className="mini-list__num">{number}</span>
    </div>
  );
}
