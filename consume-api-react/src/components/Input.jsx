
export default function Input ({ type, placeholder, pText }) {
    return (
        <div className="flex flex-wrap mt-3">
            <p className="flex items-center">{pText}</p>
            <input type={type} placeholder={placeholder} className=" ml-2 p-2 border border-[1.5px] rounded-lg"/>
        </div>

    )
}