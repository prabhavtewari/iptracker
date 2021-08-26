// import logo from './logo.svg';
// import header from './Header';
import rarrow from './images/icon-arrow.svg'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <div className="headerwrap">
        <div className="header">
          <form action="">
          IP Address Tracker
          <div className="submitrow">
          <input className="ipinput" type="text" />
          <button type="submit"  className="submitarrow">
            <img src={rarrow} alt="" srcset="" />
          </button>
          </div>
          </form>
          </div>
      </div>
    </div>
  );
}

export default App;
