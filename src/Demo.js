import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div className="col-md-12">
        <div className="container">
          <div className="row">
            <div className="col-md-12 topbarContent">
              <h4> My First Web Page Design</h4>
            </div>
            <div className="col-md-12 topbar2Content">
              <div className="btn-group btn-group-justified">
                <button className="btn btn-secondary">Home</button>
                <button className="btn btn-primary">About</button>
                <button
                  data-toggle="dropdown"
                  class="btn btn-danger dropdown-toggle"
                >
                  Contact Us
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Action1</a>
                  </li>
                  <li>
                    <a href="#">Action2</a>
                  </li>
                  <li>
                    <a href="#">Action3</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-1 sidebarContent">Left Side Bar</div>
            <div className="col-md-10">
              <div className="mainContent">
                <button className="btn btn-primary">
                  <span className="glyphicon glyphicon-search"></span> Search
                </button>
                <table className="table table-striped table-bordered table-hover table-condensed">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>spring</td>
                      <td>spring framework</td>
                      <td>spring framework description</td>
                      <td>
                        <button className="btn btn-secondary">Edit</button>
                        <button className="btn btn-primary">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>java</td>
                      <td>java framework</td>
                      <td>java framework description</td>
                      <td>
                        <button className="btn btn-secondary">Edit</button>
                        <button className="btn btn-primary">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>javascript</td>
                      <td>javascript framework</td>
                      <td>javascript framework description</td>
                      <td>
                        <button className="btn btn-secondary">Edit</button>
                        <button className="btn btn-primary">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-1 sidebarContent">Right Side bar</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
