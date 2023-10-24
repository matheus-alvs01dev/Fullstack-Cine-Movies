import './style.css'
import profile from '../../images/profile.svg'
import checkout from '../../images/checkout.svg'

const icons = [profile,checkout]

function IconsHeader() {
    <ul className='icons'>
        {icons.map((icon) => (
            <li className='icon'><img src={icon}></img></li>
        ))}
    </ul>
}

export default IconsHeader