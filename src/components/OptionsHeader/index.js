import './style.css'
const textOptions = ['CATEGORIES', 'FAVORITES', 'MYLIST']

function OptionsHeader() {
    return (
        <ul className='options'>
            {textOptions.map((text) => (
                <li className='option'><p>{text}</p></li>
            ))}
        </ul>

    )
}

export default OptionsHeader