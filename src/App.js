import React from 'react';



export default class App extends React.Component{
  render(){
    return(
      <div className="container"> <h2>This is a markdown converter with React</h2>
         <div className="App"> 
         <textarea id="text" value="" type="text"></textarea>
         <div id="preview">

         </div>
          </div>

      </div>
    );
  }
};
