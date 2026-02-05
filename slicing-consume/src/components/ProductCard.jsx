

export default function ProductCard ({ img, title, className }) {
    // console.log(title);
    return (
      <div
        className={`${className} relative overflow-hidden rounded-2xl gruop bg-cover bg-center`}
        style={{ backgroundImage: `url('${img}')` }}
      >
        {/* <img src={img} alt={alt} className={className} /> */}
        <div className="absolute inset-0 flex items-end justify-center pb-8 from-black/50 to-transparent opacity-100">
          <h1 className="text-white font-bold text-3xl">{title}</h1>
        </div>
      </div>
    );
}