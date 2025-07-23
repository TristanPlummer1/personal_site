import './App.css';
import Background from './components/Background';
import CenterContainer from './components/CenterContainer';

function App() {
  return (
    <>
      <Background></Background>
      <CenterContainer>
        <h1 className="text-xl font-bold mb-4">Hello!</h1>
        <p>This is a centered content area.</p>
      </CenterContainer>
    </>
  );
}

export default App;
