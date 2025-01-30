import './Child.css';

const Child = ({number}) => {
    const images = ["/dice1.png","/dice2.png","/dice3.png","/dice4.png", "/dice5.png","/dice6.png"];
    const finalimages = images.slice(0, number);

    return (
        <div className="main-container">
            {finalimages.map((value, index) => (
                <img key={index} src={value} className='images1'/>
            ))}
        </div>
    );
};

export default Child;
