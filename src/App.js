import './App.css';
import Blog from './components/Blog/Blog';
import Mobile from './components/Mobile/Mobile';
import ToDo from './components/TodoApi/ToDo';

function App() {
  return (
    <div className="App">
      <Article></Article>
      <Blog name='Muntasir Ahmed' job='Writter'></Blog>
      <Blog name='Asraful Ahmed' job='Actor'></Blog>
      <Blog name='Zobayed Ahmed' job='Singer'></Blog>
      <Mobile></Mobile>
      <ToDo></ToDo>
    </div>
  );
}
const styleTitle = {
  backgroundColor: 'yellow',
  border: "1px solid black",
  borderRadius:'15px'
}

export default App;
function Article() {
  return (
    <div>
      <article className="blog">
        <h1 style={styleTitle}>Welcome to my Blog </h1>
        <blockquote>
          <p style={{backgroundColor:'magenta',padding:'10px', borderRadius:'15px', color:'white'}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quia
            neque sapiente similique sequi aperiam doloremque nemo repellat
            labore. Voluptatem!
          </p>
        </blockquote>
      </article>
    </div>
  );
}