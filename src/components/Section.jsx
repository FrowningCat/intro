export default function Section(props) {
    return (
        <li>
            <p>
                <strong>{props.title}</strong> {props.description}
            </p>
        </li>
    );
}
