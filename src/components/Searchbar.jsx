import React from "react";

const Searchbar = (props) => {
  return (
    <div>
      <div>
       

          <div className="row offset-4">
            <div className="col-md-3">
              <label className="search">
                <input type="text" 
                name="city"
                autoComplete="off"
                />
              </label>
            </div>
            <div className="col-md-3 offset-1 mt-4">
              <button className="btn btn-warning">Get Weather</button>
            </div>
          </div>
        
        
      </div>
    </div>
  );
};

export default Searchbar;
