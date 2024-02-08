import { useState } from 'react';
import { Link } from 'react-router-dom';
import { requestLogin } from '../service/request';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const [loged, setLoged] = useState(false);

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handleSenha = ({ target }) => {
    setSenha(target.value);
  };

  const formeValidate = (() => {
    const minsenha = 6;
    const regex = /\S+@\S+\.\S+/;
    const validEmail = regex.test(email);
    return !!(!validEmail
      || senha.length < minsenha
      || senha === ''
      || email === '');
  });

  const login = async (event) => {
    event.preventDefault();

    try {
      const user = await requestLogin({ email, senha });
      localStorage.setItem(
        'user',
        JSON.stringify(user),
      );
      setLoged(true);
    } catch (error) {
      setFailedTryLogin(true);
      console.log(error);
    }
  };

  if (loged) {
    return (
      <div>
        <h1> Bem vindo </h1>
        <Link to="/home">
          Acessar Home
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h1> Login </h1>
      <label htmlFor="email">
        Email
        <input
          data-testid="common_login__input-email"
          type="email"
          id="email"
          className="email"
          placeholder="email@email.com"
          value={ email }
          onChange={ handleEmail }
        />
      </label>

      <label htmlFor="senha">
        Senha
        <input
          data-testid="common_login__input-senha"
          type="senha"
          id="senha"
          className="senha"
          placeholder="senha"
          value={ senha }
          onChange={ handleSenha }
        />
      </label>
      {
        (failedTryLogin)
          ? (
            <p data-testid="common_login__element-invalid-email">
              Senha ou e-mail não encontrado.
            </p>
          )
          : null
      }
      <button
        data-testid="common_login__button-login"
        type="button"
        onClick={ (event) => login(event) }
        disabled={ formeValidate() }
      >
        Login
      </button>

      <button
        data-testid="common_login__button-register"
        type="button"
      >
        <Link to="/">
          Cadastrar
        </Link>
      </button>
    </div>
  );
}

export default Login;