import React from 'react';
import { useState } from 'react';
import { loginPost } from '../../services/loginServices';

const initialState = {
  email: '',
  password: ''
};

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeE = e => {
    setEmail(e.target.value);
  };
  const handleChangeP = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = { email, password };
    const res = await loginPost(data);
    // forceUpdate();
    console.log(res.data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      action=''
      className='border-2 flex flex-col justify-center items-center gap-4'>
      <input
        onChange={handleChangeE}
        value={email}
        type='text'
        placeholder='email'
        className='input'
      />
      <input
        onChange={handleChangeP}
        value={password}
        type='password'
        placeholder='password'
        className='input'
      />
      <button className='btn btn-warning'>Login</button>
    </form>
  );
}
