
import React from "react";
//import { Card } from 'antd';

const WeatherShow = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="weather hov">
              <div className="current">
                <div className="info">
                  <div>&nbsp;</div>
                  <div className="row  pl-2">
                    <div className="col-6">
                      <div className="city pt-4">{props.name}</div>
                      </div>
                      <div className="col-6 pl-2">
                        <img src={props.logo} className="image-icon" alt="" />
                      </div>
                    
                  </div>
                  <div className="temp">
                    {props.temp}&deg; <small>C</small>
                  </div>

                   <div className="day">{props.day}</div> 
                
                  <div>&nbsp;</div>
                </div>
                <div className="icon">
                  <span className="wi-day-sunny" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherShow;
