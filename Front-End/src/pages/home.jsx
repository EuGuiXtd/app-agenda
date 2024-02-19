
function Home() {
  return (
    <div>
        <h1>Home</h1>
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Endereço de email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email"></input>
    <small id="emailHelp" class="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Senha</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha"></input>
  </div>
  <button type="submit" class="btn btn-primary">Enviar</button>
  <button type="submit" class="btn btn-primary">Enviar</button>
</form>
    </div>
  );
}

export default Home;