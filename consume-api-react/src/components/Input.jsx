
export default function Input ({ type, placeholder, pText, onChange, ...props }) {
    console.log(onChange)
    return (
        <div className="flex flex-wrap mt-3">
            <p className="flex items-center">{pText}</p>
            <input type={type} placeholder={placeholder} className=" ml-2 p-2 border border-[1.5px] rounded-lg" onChange={onChange} {...props}/>
        </div>

    )
}