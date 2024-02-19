import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

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
      {
        (failedTryLogin)
          ? (
            <p data-testid="common_login__element-invalid-email">
              Senha ou e-mail não encontrado.
            </p>
          )
          : null
      }
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Endereço de email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email" onChange={ handleEmail } value={ email }></input>
    <small id="emailHelp" class="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Senha</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha" onChange={ handleSenha } value={ senha }></input>
  </div>
  <button type="submit" class="btn btn-primary" onClick={ (event) => login(event) } disabled={ formeValidate() }>Login</button>
  <button type="submit" class="btn btn-primary" onClick={ () => navigate('/') }>Cadastrar</button>
</form>
    </div>
  );
}

export default Login;