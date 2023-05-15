import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';
// github actions somthing

// somthing comment has been added
function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & Master GitHub Actions</h1> 
      </header>
      <MainContent />
    </>
  );
}

export default App;
