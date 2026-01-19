import ButtonLabel from "./ButtonLabel";

export default function SplitLeft() {
  return (
    <div className="split__media" aria-hidden="true">
      <div className="mock">
        <div className="mock__badge">UI Kit</div>
        <div className="mock__title">Component Library</div>
        <div className="mock__row">
          <ButtonLabel className="chip" text="Button" />
          <ButtonLabel className="chip" text="Card" />
          <ButtonLabel className="chip" text="Badge" />
          <ButtonLabel className="chip" text="Modal" />
        </div>
        <div className="mock__row">
          <ButtonLabel className="bar" text="" />
          <ButtonLabel className="bar" text="" />
          <ButtonLabel className="bar" text="" />
        </div>
      </div>
    </div>
  );
}
