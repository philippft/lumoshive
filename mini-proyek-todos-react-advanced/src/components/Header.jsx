import HeaderLogo from '../assets/LogoTodo.png'


export default function Header () {
    return (
        <header className="w-full h-50 bg-gray-200 flex items-center justify-center">
                <img src={HeaderLogo} alt="" />
            {/* <div className='flex items-center'>

            </div> */}
        </header>
    )
}