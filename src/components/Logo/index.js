import './style.css'
import logo from '../../images/logo.svg'
function Logo() {
    return (
        <div className='logo'>
            <img
                src={logo} alt=
                'logo'
                className='logoSvg'
            ></img>
            <p><strong>Cine Movies</strong></p>
        </div>
    )
}

export default Logo