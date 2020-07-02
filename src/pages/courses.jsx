import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Input,
  ModalFooter,
  FormGroup,
} from "reactstrap";
import axios from "axios";

class CoursesCRUD extends Component {
  state = {
    courses: [],
    newCourseModel: false,
    newCourseData: {
      id: "",
      name: "",
      desp: "",
    },
    editCourseModel: false,
    editCourseData: {
      id: "",
      name: "",
      desp: "",
    },
    // token: "",
  };

  constructor(props) {
    super(props);
  }

  toggleNewCourseModal() {
    this.setState({
      newCourseModel: !this.state.newCourseModel,
    });
  }

  toggleEditCourseModal() {
    this.setState({
      editCourseModel: !this.state.editCourseModel,
    });
  }

  componentWillMount() {
    this._refreshCourses();
  }

  addCourse() {
    let config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.props.token,
      },
    };
    axios
      .post("http://localhost:8080/topics", this.state.newCourseData, config)
      .then((response) => {
        let { courses } = this.state;
        courses.push(response.data);
        this.setState({
          courses: response.data,
          courses,
          newCourseModel: false,
          newCourseData: {
            id: "",
            name: "",
            desp: "",
          },
        });
      });
  }

  updateCourse() {
    let { id, name, desp } = this.state.editCourseData;
    let config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.props.token,
      },
    };
    axios
      .put(
        "http://localhost:8080/topics/" + this.state.editCourseData.id,
        this.state.editCourseData,
        config
      )
      .then((response) => {
        this._refreshCourses();
        this.setState({
          editCourseModel: false,
          editCourseData: {
            id: "",
            name: "",
            desp: "",
          },
        });
      });
  }

  deleteCourse(id) {
    let config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.props.token,
      },
    };
    axios
      .delete("http://localhost:8080/topics/" + id, config)
      .then((response) => {
        this._refreshCourses();
      });
  }

  _refreshCourses() {
    console.log("Token Received: " + this.props.token);

    let config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    };

    axios.get("http://localhost:8080/topics", config).then((response) => {
      this.setState({
        courses: response.data,
      });
    });
  }

  editCourse(id, name, desp) {
    this.setState({
      editCourseData: { id, name, desp },
      editCourseModel: !this.state.editCourseModel,
    });
  }

  render() {
    //const { handleLogout } = this.props;
    let courses = this.state.courses.map((course) => {
      return (
        <tr key={course.id}>
          <td>{course.id}</td>
          <td>{course.name}</td>
          <td>{course.desp}</td>
          <td>
            <Button
              color="success"
              size="sm"
              className="m-2"
              onClick={this.editCourse.bind(
                this,
                course.id,
                course.name,
                course.desp
              )}
            >
              Edit
            </Button>
            <Button
              color="danger"
              size="sm"
              className="m-2"
              onClick={this.deleteCourse.bind(this, course.id)}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 topbarContent">
            <h1>This is Courses Page</h1>
          </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item ">
                <a class="nav-link" href="/">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <br />
        <Button
          className="my-3"
          color="primary"
          onClick={this.toggleNewCourseModal.bind(this)}
        >
          Add Course
        </Button>
        <Modal
          isOpen={this.state.newCourseModel}
          toggle={this.toggleNewCourseModal.bind(this)}
        >
          <ModalHeader toggle={this.toggleNewCourseModal.bind(this)}>
            Add a new course
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="id">id</Label>
              <Input
                id="id"
                value={this.state.newCourseData.id}
                onChange={(e) => {
                  let { newCourseData } = this.state;
                  newCourseData.id = e.target.value;
                  this.setState({ newCourseData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">name</Label>
              <Input
                id="name"
                value={this.state.newCourseData.name}
                onChange={(e) => {
                  let { newCourseData } = this.state;
                  newCourseData.name = e.target.value;
                  this.setState({ newCourseData });
                }}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="description">description</Label>
              <Input
                id="description"
                value={this.state.newCourseData.desp}
                onChange={(e) => {
                  let { newCourseData } = this.state;
                  newCourseData.desp = e.target.value;
                  this.setState({ newCourseData });
                }}
              ></Input>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addCourse.bind(this)}>
              Add Course
            </Button>
            <Button
              color="primary"
              onClick={this.toggleNewCourseModal.bind(this)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <Modal
          isOpen={this.state.editCourseModel}
          toggle={this.toggleEditCourseModal.bind(this)}
        >
          <ModalHeader toggle={this.toggleEditCourseModal.bind(this)}>
            Edit a course
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="id">id</Label>
              <Input
                id="id"
                value={this.state.editCourseData.id}
                onChange={(e) => {
                  let { editCourseData } = this.state;
                  editCourseData.id = e.target.value;
                  this.setState({ editCourseData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">name</Label>
              <Input
                id="name"
                value={this.state.editCourseData.name}
                onChange={(e) => {
                  let { editCourseData } = this.state;
                  editCourseData.name = e.target.value;
                  this.setState({ editCourseData });
                }}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="description">description</Label>
              <Input
                id="description"
                value={this.state.editCourseData.desp}
                onChange={(e) => {
                  let { editCourseData } = this.state;
                  editCourseData.desp = e.target.value;
                  this.setState({ editCourseData });
                }}
              ></Input>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.updateCourse.bind(this)}>
              Update Course
            </Button>
            <Button
              color="primary"
              onClick={this.toggleEditCourseModal.bind(this)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{courses}</tbody>
        </Table>
        <Button
          className="my-3"
          color="primary"
          onClick={this.props.handleLogout}
        >
          Logout
        </Button>
      </div>
    );
  }
}

export default CoursesCRUD;
