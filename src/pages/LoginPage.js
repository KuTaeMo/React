import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Login from '../components/login/Login';

const LoginPage = (props) => {
  console.log(props.match.params.id);
  return (
    <div>
      <button onClick={() => props.history.go(-1)}>뒤로가기</button>

      <Login />
    </div>
  );
};

export default LoginPage;
