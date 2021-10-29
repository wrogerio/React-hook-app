import { useEffect, useState } from "react";
import "./index.css";
import { Mensagem } from "./Mensagem";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
    });

    const { name, email } = formState;

    useEffect(() => {
        //console.log("uma vez");
        return () => {};
    }, []);

    useEffect(() => {
        //console.log("name");
    }, [name, email]);

    const handleName = (value) => {
        setFormState({
            ...formState,
            name: value,
        });
    };

    const handleEmail = (value) => {
        setFormState({
            ...formState,
            email: value,
        });
    };

    return (
        <div>
            <h1>SimpleForm</h1>
            <hr />

            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" value={name} className="form-control" onChange={(e) => handleName(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" value={email} className="form-control" onChange={(e) => handleEmail(e.target.value)} />
                    </div>
                </div>
            </div>

            {name === "123" && (
                <div className="row">
                    <div className="col">
                        <Mensagem />
                    </div>
                </div>
            )}
        </div>
    );
};
