export default function Login() {
    return (
        <div>
            <form>
                <label>Email</label>
                <input type="text" className="input" placeholder="example@gmail.com" />
                <label>Mot de passe</label>
                <input type="password" className="input" placeholder="⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫" />
                <button className="button">
                    Se connecter
                    <i className="fa fa-sign-in"></i>
                </button>
            </form>
        </div>
    )
}
