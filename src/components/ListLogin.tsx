import React, { Component, ChangeEvent } from 'react';

interface Login {
  username: string;
  password: string;
}

interface State {
  logins: Login[];
}

class LoginList extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      logins: []
    };
  }

  addLogin = () => {
    const newLogin: Login = {
      username: '',
      password: ''
    };
    this.setState(prevState => ({
      logins: [...prevState.logins, newLogin]
    }));
  };

  handleChange = (index: number, field: keyof Login, value: string) => {
    this.setState(prevState => {
      const logins = [...prevState.logins];
      logins[index][field] = value;
      return { logins };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.addLogin}>Thêm Đăng Nhập</button>
        {this.state.logins.map((login, index) => (
          <div key={index}>
            <input
              type="text"
              value={login.username}
              onChange={(e) => this.handleChange(index, 'username', e.target.value)}
              placeholder="Tên đăng nhập"
            />
            <input
              type="password"
              value={login.password}
              onChange={(e) => this.handleChange(index, 'password', e.target.value)}
              placeholder="Mật khẩu"
            />
          </div>
        ))}
      </div>
    );
  }
}

export default LoginList;
