import "./Child.css";
const Child = (props) => {
    return (
        <div className="main-container">
        <div className="parent-container">
            <img className="image-tag"  src={props.image} alt={props.title} />
            <div className='title-description'>
            <h1 className="title">{props.title}</h1>
            <p className="description">{props.description}</p>
            </div>
            </div>
        </div>
    );
}

export default Child;