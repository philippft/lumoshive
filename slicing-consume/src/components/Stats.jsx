

export default function Stats({ stats }) {
const statItems = [
  { label: "Year Experience", value: stats?.experience },
  { label: "Opened in the country", value: stats?.country },
  { label: "Furniture sold", value: stats?.sold },
  { label: "Variant Furniture", value: stats?.variant },
];

  return (
    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-[#2D6A65] rounded-3xl p-10 shadow-2xl z-20">
      <div className="flex flex-row items-center justify-around divide-x divide-white/20">
        {statItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center px-8 w-full text-center"
          >
            <h2 className="text-white text-4xl font-bold font-saira mb-2">
              {item.value}
            </h2>
            <p className="text-white/70 text-sm font-saira uppercase tracking-wider leading-tight max-w-[120px]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
