import './styles/Card.css';

function Card(props){
  return(
    <>
    <div className="card">
      <p>{props.task}</p>
    </div>
    </>
  )
}

export default Card