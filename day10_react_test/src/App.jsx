
import Child from './Child';

const App = () => {
    const data = {
        image: 'https://campus.epam.com/static/news/255/self-study_03375353.png',
        title: 'React Test',
        description: 'Create a parent component which passes a props to child component such as image,title,description'
    };
    return (
        <div>
            <Child image={data.image} title={data.title} description={data.description}/>
        </div>
    );
}
export default App;