import StatsCard from "../components/common/StatsCard";

export default function Stats() {
    return (
        <section className="stats">
            <div className="container">
                <div className="stats__grid">
                <StatsCard number="3" label="Page sections" />
                <StatsCard number="12" label="Reusable components" />
                <StatsCard number="1" label="CSS file" />
                <StatsCard number="0" label="Dependencies" />
                </div>
            </div>
        </section>
    );
}