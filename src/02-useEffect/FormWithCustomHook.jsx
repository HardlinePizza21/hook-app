import { useEffect} from "react"
import { Message } from "./Message"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {


    const {formState, onInputChange, onResetForm,  username, email, password} = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password} = formState

    useEffect(() => {
        //   console.log('formState Changed!')
    }, [formState]);

    useEffect(() => {
        //   console.log('email Changed!')
    }, [email]);



    return (
        <>
            <h1>Formulario con custom Hook</h1>
            <hr />

            <input
                type="text"
                className='form-control'
                placeholder='UserName'
                name='username'
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className='form-control mt-2'
                placeholder='ejemplo@gmail.com'
                name='email'
                value={email}
                onChange={onInputChange}
            />
            <input
                type="password"
                className='form-control mt-2'
                placeholder='Contrasena'
                name='password'
                value={password}
                onChange={onInputChange}
            />


            <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>

            {
                username === 'HardlinePizza' && <Message />
            }

        </>
    )
}
