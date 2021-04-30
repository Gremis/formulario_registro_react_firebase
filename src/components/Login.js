import React, { useState } from "react";
import { auth } from "../firebaseconfig";
import { useHistory } from "react-router-dom";

const Login = () => {
  const historico = useHistory();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [msgerror, setMsgError] = useState(null);

  const RegistrarUsuario = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, pass)
      .then((r) => {
        historico.push("/");
      })
      .catch((e) => {
        if (e.code == "auth/invalid-email") {
          setMsgError("Formato Email Inválido");
        }
        if (e.code == "auth/weak-password") {
          setMsgError("A senha deve ter 6 caracteres o mais");
        }
      });
  };

  const LoginUsuario = () => {
    auth
      .signInWithEmailAndPassword(email, pass)
      .then((r) => {
        historico.push("/");
      })
      .catch((err) => {
        if (err.code == "auth/wrong-password") {
          setMsgError("password inválido");
        }
      });
  };

  return (
    <div className="row mt-5">
      <div className="col"></div>
      <div className="col">
        <form onSubmit={RegistrarUsuario} className="form-group">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-control"
            placeholder="Digita o Email"
            type="text"
          />
          <input
            onChange={(e) => {
              setPass(e.target.value);
            }}
            className="form-control mt-4"
            placeholder="Digita a Senha"
            type="password"
          />
          <input
            className="btn btn-dark btn-block mt-4"
            value="Registrar usuario"
            type="submit"
          />
        </form>
        <button onClick={LoginUsuario} className="btn btn-success btn-block">
          Conecte-se
        </button>
        {msgerror != null ? <div>{msgerror}</div> : <span></span>}
      </div>
      <div className="col"></div>
    </div>
  );
};

export default Login;
