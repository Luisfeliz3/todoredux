import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       <div clasName ="Todo-App">
         <form>
           <input type = "text"/>
           
         </form>

         <div className="Todo-List">
           <ul>
             <li >
               <input type = "checkbox"/> Create static UI
             </li>
             <li >
               <input type = "checkbox"/> Create INitial State 
             </li>
             <li >
               <input type = "checkbox"/> Use state to Render UI
             </li>
           </ul>
         </div>

       </div>
      </header>
    </div>
  );
}

export default App;
