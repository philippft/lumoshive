import HeroStatusItem from "./common/HeroStatusItem";

export default function HeroCardPreview() {
    return (
        <>
            <div className="card-preview__top">
            <div className="dot dot--red"></div>
            <div className="dot dot--yellow"></div>
            <div className="dot dot--green"></div>
            <div className="card-preview__title">Dashboard</div>
            </div><div className="card-preview__body">
                <div className="mini-chart"></div>
                <div className="mini-list">
                    <HeroStatusItem pillStatus="pill--success" status="Active" text="Components built" number="18" />
                    <HeroStatusItem pillStatus="pill--info" status="Draft" text="In progress" number="6" />
                    <HeroStatusItem pillStatus="pill--warning" status="Review" text="Needs polish" number="3" />
                </div>
                <div className="mini-cta">
                    <button className="btn btn--small btn--primary" type="button">Publish</button>
                    <button className="btn btn--small btn--ghost" type="button">Preview</button>
                </div>
            </div>
        </>
    )
}