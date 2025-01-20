// components
import { Alert, Card, Typography } from '@mui/material';
import { Logo } from '../../ui/logo';
import { Link } from '../../ui/link';
import { Button } from '../../ui/button';
import { TextInput } from '../../ui/TextInput';

import { useState } from 'react';
import service from '../../../services/service';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/user/slice';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setEmail] = useState<string>('tammy@test.tech')
  const [password, setPassword] = useState<string>('password123')
  const [isInvalidLogin, setIsInvalidLogin] = useState<boolean>(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (<div style={{
    height: '100%',
    textAlign: 'center',
    width: '100%',
  }}>
    <Logo 
      title="Claro Money" 
      width={200}  
    />
    <Card style={{
      margin: '0 auto',
      width: '50%'
    }}>
      <Typography variant="subtitle1" style={{
        display: !isInvalidLogin ? 'flex' : 'none',
        textAlign: 'left'
      }}>Enter your account information</Typography>
      <Alert severity="error" style={{
        display: isInvalidLogin ? 'flex' : 'none'
      }} variant="outlined">Invalid login credentials.</Alert>
      <TextInput
        error={isInvalidLogin}
        label="Email login"
        value={username}
        onCallback={(value) => {
          setEmail(value)
        }}
      />
      <TextInput
        error={isInvalidLogin}
        isPassword={true}
        label="Password"
        value={password}
        onCallback={(text) => {
          // TODO: 
          // setPassword(encrypt({ text }))
        }}
      />
      <Button 
        color="primary"
        disabled={isInvalidLogin}
        text="Login"
        wide={true}
        onCallback={() => {
          navigate('/dashboard');
        }}
      />
      <Link to="/forgot-password" name="Forgot password" />
    </Card>
  </div>);
}
