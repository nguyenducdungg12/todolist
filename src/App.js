import ContentInput from './Components/ContentInput'
import Control from './Components/Control'
import React from 'react'
function App() {
  return (
    <div className="app">
      <div className="container">
        <div class="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr/>
        </div>
        <div className="row">
           <ContentInput/>
          <Control/>
        </div>
      </div>
    </div>
  );
}

export default App;
