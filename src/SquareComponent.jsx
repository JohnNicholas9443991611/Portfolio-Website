export default function Square (props) {
    console.log(props);
    // eslint-disable-next-line react/prop-types
    return <div className='square'>{props.title}</div>;
}