import { useEffect } from 'react';

// components
import { Card } from '@mui/material';
import { Logo } from '../../ui/logo';
import { Link } from '../../ui/link';

import service from '../../../services/service';
import { login } from '../../../store/user/slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    // TODO: no proper logout API, logging in with 0 minute expiry

    service.post(
      {
        username: 'emilys',
        password: 'emilyspass',
        expiresInMinutes: 0,
      },
      `${process.env.API_DOMAIN}/auth/login`,
      true, // withCredentials
    ).then((payload): void => {
      dispatch(login({
        id: -1,
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        gender: '',
        image: '',
        accessToken: '',
        refreshToken: '',
      }))
      navigate('/dashboard');
    }).catch(error => {
      alert('error logging out');
      // TODO: would add audit logging here
    });

  })
  return (<div style={{
    height: '100%',
    textAlign: 'center',
    width: '100%',
  }}>
    <Logo 
      title="Nimbly" 
      width={200}  
    />
    <Card style={{
      margin: '0 auto',
      width: '50%'
    }}>You are logged out! 
      <Link to="/" name="Log back in" />
    </Card>
  </div>);
}
