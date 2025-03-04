import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'HardlinePizza21',
        email: 'hardline@gmail.com'
    })

    const { username, email } = formState

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })

    }


    useEffect(() => {
      console.log('useEfectCall!')
    }, []);


    useEffect(() => {
    //   console.log('formState Changed!')
    }, [formState]);

    useEffect(() => {
    //   console.log('email Changed!')
    }, [email]);
    


    return (
        <>
            <h1>Formulario simple</h1>
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


            {
                username === 'HardlinePizza' && <Message/>
            }

        </>
    )
}
