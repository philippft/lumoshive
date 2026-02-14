import Plus from '../assets/plus.svg';


export default function Button ({ className, text, tambah}) {
    if (tambah) {
            return (
        <>
            <button className={className}>
                <span className='font-semibold'>{text}</span>
                <img src={Plus} alt="" className='w-4 h-4'/>
            </button>
        </> 
    )
    } else {
        return (
            <>
                <button>Ini button Biasa</button>
            </>
        )
    }

}