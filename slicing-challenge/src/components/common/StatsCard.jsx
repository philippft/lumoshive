
export default function StatsCard({ number, label}) {
    return (
        <div className="stat">
            <div className="stat__num">{number}</div>
            <div className="stat__label">{label}</div>
        </div>
    )
}