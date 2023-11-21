import './App.scss';
import Heder from './components/Heder';
import TableUser from './components/TableUser';
import Container from 'react-bootstrap/Container';
function App() {
  return (
 <div className='app-container'>
  <Container>

    <Heder/>
   <TableUser/>
  </Container>
 </div>
  );
}

export default App;
