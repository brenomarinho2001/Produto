
import '../Login/Login.css'

export default function Login() {
    return (
        <div class="main-login">
            <div class="left-login">


                <h1>Faça Login <br/> E se divirta bastante!</h1>
                
            </div>
            <div class="right-login">
                <div class="card-login">
                    <h1>LOGIN</h1>
                    <div class="textfield">
                        <label for="usuario">Usuário</label>
                        <input type="text" name="usuario" placeholder="usuário"/>
                    </div>

                    <div class="textfield">
                        <label for="senha">Senha</label>
                        <input type="password" name="senha" placeholder="senha"/>
                    </div>

                    <button class="btn-login">Login</button>
                </div>
            </div>
        </div>
    )
}