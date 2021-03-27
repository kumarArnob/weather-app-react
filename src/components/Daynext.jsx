import React from "react";

const Daynext = (props) => {
  return (
    <div>
     <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="weather">
              <div className="current new">
                <div className="info">
                  <div>&nbsp;</div>
                  <div className="row  pl-2">
                    <div className="col-6">
                      <div className="city pt-4">{props.day}</div>
                      </div>
                      <div className="col-6 pl-2">
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
        </div>
      </div>
    </div>
  );
};

export default Daynext;
