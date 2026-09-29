  import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../app/hooks';
import { loginSuccess } from '../features/auth/authSlice';

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<
  'admin' | 'manager' | 'viewer'
>('admin');

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    // Temporary mock authentication
    const user = {
      id: '1',
      name: 'John Admin',
      email,
      role,
    };

    const token = 'mock-jwt-token';

    dispatch(
      loginSuccess({
        user,
        token,
      })
    );

    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>

          <input
            type="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            placeholder="Enter email"
          />
        </div>

        <div>
          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            placeholder="Enter password"
          />
        </div>

        <button type="submit">
          Login
        </button>

        <div>
  <label>Role</label>

  <select
    value={role}
    onChange={(event) =>
      setRole(
        event.target.value as
          | 'admin'
          | 'manager'
          | 'viewer'
      )
    }
  >
    <option value="admin">
      Admin
    </option>

    <option value="manager">
      Manager
    </option>

    <option value="viewer">
      Viewer
    </option>
  </select>
</div>
      </form>
    </div>
  );
}

export default Login;