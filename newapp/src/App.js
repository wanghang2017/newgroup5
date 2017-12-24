import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/Header';
import LogHeader from './components/LogHeader';
import FirstPageShow from './components/firstPageShow/FirstPageShow';
import Sliders from './components/Sliders';
import './slider.css';
const data = [{src:require('./img/xmad_151325786593_PlIVg.jpg'), url:"#"},{src:require('./img/xmad_15039951895346_BYpul.jpg'), url:"#"},{src:require('./img/xmad_15128963940496_dTEbu.jpg'), url:"#"},{src:require('./img/xmad_15130880786619_gqrmF.jpg'), url:"#"},{src:require('./img/xmad_15131652928627_awzRZ.jpg'), url:"#"}];
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <LogHeader/>
        <FirstPageShow/>
          <Sliders content={data} width={1226} height={460} duration={3000} controller={true} paganation={true} />
      </div>
    );
  }
}

export default App;
