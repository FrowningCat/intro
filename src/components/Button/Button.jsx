import './Button.css';

export default function Button({ children }) {
    function handleClick() {
        console.log('111');
    }

    return (
        <button className="button" onClick={handleClick}>
            {children}
        </button>
    );
}
