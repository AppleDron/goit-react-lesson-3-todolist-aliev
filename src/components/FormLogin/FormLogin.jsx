const { Component } = require('react');

class FormLogin extends Component {
  state = {
    email: '',
    password: '',
    isChecked: false,
    gender: null,
  };

  handleChangeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChangeCheckbox = e => {
    this.setState({ isChecked: e.target.checked });
  };

  handleChangeRadio = e => {
    this.setState({ gender: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.getData({
      email: this.state.email,
      password: this.state.password,
    });

    this.props.closeModal();
    this.reset();
  };

  reset = () => {
    this.setState({ email: '', password: '' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.handleChangeInput}
              value={this.state.email}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={this.handleChangeInput}
              value={this.state.password}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              checked={this.state.isChecked}
              onChange={this.handleChangeCheckbox}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              I agree with statement
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value="male"
              onChange={this.handleChangeRadio}
              checked={this.state.gender === 'male'}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              value="female"
              onChange={this.handleChangeRadio}
              checked={this.state.gender === 'female'}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Female
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={!this.state.isChecked}
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default FormLogin;
