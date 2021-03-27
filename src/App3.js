import React from "react";





const Api_Key = "fddbc84dd55a62f8059f2a7ead533136";

class App extends React.Component {
  constructor(getWeather) {
    super();
    this.state = {
      city: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      description: "",
      error: false
    };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},india&appid=${Api_Key}&units=metric`
      );

      const response = await api_call.json();

      this.setState({
       city:response.name,
        error: false
      });
        
      console.log(response);
    }
     else {
      this.setState({
        error: true
      });
    }
};

  render()
  {
    return (
      <div className="App">
        
      </div>
    );
  }
}
}

export default App;

