import React from "react";
import "./App.css";

function FormControls() {
  return (
    <div>
        <nav className="navbar navbar-inverse">
                <div className="btn-group btn-group-justified">
                  <button className="btn btn-secondary">Home</button>
                  <button className="btn btn-primary">About</button>
                  <button className="btn btn-primary">Products</button>
                  <button className="btn btn-primary">Orders</button>
                  <button className="btn btn-primary">Contact Us</button>
                </div>
              </nav>
      <div className="col-md-12">
        <div className="container">
          <div className="row">
            <div className="col-md-12 topbarContent">
              <h4> My First Web Page Design</h4>
            </div>
            <div className="col-md-12 topbar2Content">
              <nav className="navbar navbar-inverse">
                <div className="btn-group btn-group-justified">
                  <button className="btn btn-secondary">Home</button>
                  <button className="btn btn-primary">About</button>
                  <button className="btn btn-primary">Products</button>
                  <button className="btn btn-primary">Orders</button>
                  <button className="btn btn-primary">Contact Us</button>
                </div>
              </nav>
            </div>

            <div className="col-md-1 sidebarContent">Left Side Bar</div>
            <div className="col-md-10">
              <div className="mainContent">
                <button className="btn btn-primary">
                  <span className="glyphicon glyphicon-search"></span> Search
                </button>
                <form>
                  <div className="form-group">
                    <label for="inputUserName">Username</label>
                    <input
                      class="form-control"
                      type="text"
                      id="inputUserName"
                      placeholder="Login Username"
                    />
                  </div>
                  <div className="form-group">
                    <label for="inputPassword">Password</label>
                    <div class="input-group">
                      <span class="input-group-addon">
                        <span className="glyphicon glyphicon-search"> </span>
                      </span>
                      <input
                        class="form-control"
                        type="password"
                        id="inputPassword"
                        placeholder="Login User password"
                      />
                    </div>
                  </div>
                  <button className="btn btn-primary" type="submit">
                    Login
                  </button>
                </form>
                <br />
                <div className="card panel-default">
                  <div className="card-header">Bootstrap introduction</div>
                  <div className="card-body">
                    Attaching this week’s report. Please highlight suitable
                    roles and resend the sheet so that I can circulate your
                    profile. Let me know in case of questions. Please note that
                    the minimum role duration for GCP roles needs to be of two
                    months. Note: Please do not apply for Ireland based roles
                    unless you have a valid work permit for Ireland. Please
                    select only below columns while resending the sheet.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1 sidebarContent">Right Side bar</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormControls;
