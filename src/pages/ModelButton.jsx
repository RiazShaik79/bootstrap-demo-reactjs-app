import React, { Component } from "react";

class ModelButton extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          class="btn btn-outline-primary btn-sm btn-block my-2"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Product Details
        </button>

        <div
          className="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          
        >
          <div className="modal-dialog modal-dialog-centered" >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  {this.props.product.name}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img src="https://picsum.photos/100"></img>
                <br />
                <br />
                <p>{this.props.product.desp}</p>
                <p>This is a demo description!..</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModelButton;
