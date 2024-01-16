import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Window from './components/Window';
import Footer from './components/Footer';
import Faq from './components/Faq';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
       
        <Route path='/' element={[<Main />,<Window />,
      <Footer />,
      <Faq /> ]} />
       <Route path='/flashcard' element={<h1>Welcome to flashcard</h1>} />
       <Route path='/contact' element={<h1>Welcome to conatact page</h1>} />
       <Route path='/faq' element={<Faq />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
