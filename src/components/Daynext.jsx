import React from "react";

const Daynext = (props) => {
  return (
    <div>
     
            <div className="weather">
              <div className="current new newcurrent">
                <div className="info">
                  <div>&nbsp;</div>
                  <div className="row justify-content-left">
                    <div className="col-4">
                      <div className="city ">{props.day}</div>
                      </div>
                      <div className="col-4">
                        <img src={props.logo} className="image-icon" alt="" />
                      </div>
                    
                  </div>
                  <div className="temp">
                    {props.temp}&deg; <small>C</small>
                  </div>

                  {/* <div className="wind"><small><small>Max Temparature :</small></small> </div> */}
                  <div>&nbsp;</div>
                </div>
                <div className="icon">
                  <span className="wi-day-sunny" />
                </div>
              </div>
            </div>
          </div>
        
  );
};

export default Daynext;
