

export default function ProductCard ({ img, alt, title, className }) {
    return (
      <div>
        <img src={img} alt={alt} className={className}/>
        <h1>{title}</h1>
      </div>
    );
}