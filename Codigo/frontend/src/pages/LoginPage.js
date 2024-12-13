import React from "react";
import Logo from "../components/UI/Logo"
import LoginForm from "../components/UI/LoginForm";
import AuthLayout from "../components/UI/AuthLayout";

const LoginPage = () =>{
    return (
        <AuthLayout>
            <Logo
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                alt="Ejemplo-Company"
            />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Inicia sesion en tu cuenta
            </h2>
            <div className="mt-10">
                <LoginForm />
                <p className="mt-10 text-center text-sm/6 text-gray-500">
                Sin cuenta?{" "}
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Registrate Aqui!
                </a>
                </p>
            </div>
        </AuthLayout>
    );
};

export default LoginPage;