export default function Button({
    type = 'button',
    text,
    color = 'primary_color',
    disabled = false,
    clickManager,
}) {
    return (
        <button
            type={type}
            className={`btn ${color}`}
            disabled={disabled}
            onClick={clickManager}
        >
            {text}
        </button>
    );
}