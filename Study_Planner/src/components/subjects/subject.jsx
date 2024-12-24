import './subject.css'

function Subject_Card(props) {
    
    return <>
    <div className='subject_details'>
    <p className='subName'>{props.subject} - {props.hours} hrs</p>
    <button onClick={() => {
        props.increaseHours(props.idx);
    }} className='increment'>+</button>
    <button onClick={() => {
        props.decreaseHours(props.idx);
    }} className='decrement'>-</button>
    </div>
    </>
}


export default Subject_Card