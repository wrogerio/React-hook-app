import { useEffect } from "react/cjs/react.development";
import { UseForm } from "../../hooks/useForm";
import "./index.css";

export const FormWithCustomHook = () => {
    const [formValues, handleInputCHange] = UseForm({
        name: "",
        email: "",
        password: "",
    });

    const { name, email, password } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    };

    useEffect(() => {
        console.log("email alterou");
    }, [email]);

    return (
        <div>
            <h1>Form With Custom Hook</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="name" value={name} className="form-control" onChange={(e) => handleInputCHange(e.target)} />
                        </div>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" value={email} className="form-control" onChange={(e) => handleInputCHange(e.target)} />
                        </div>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                autoComplete="current-password"
                                value={password}
                                className="form-control"
                                onChange={(e) => handleInputCHange(e.target)}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button type="submit">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    );
};
