import React from 'react';
import Player from './components/Player';
import ItemSlider from './components/ItemSlider';
import config from './config.json';
import logo from './images/totuus-viestin.png';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      selected: null
    };
  }

  componentDidMount() {
    fetch(config.API_URL)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.Items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  setSelected = (item) => {
    this.setState({ selected: item });
  }

  renderContent = () => {
    const { error, isLoaded, items, selected } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="content">
          <Player {...selected} />
          <ItemSlider items={items} setSelected={this.setSelected} />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="logo" alt="logo" />
        {this.renderContent()}
      </div>
    );  
  }
}

export default App;