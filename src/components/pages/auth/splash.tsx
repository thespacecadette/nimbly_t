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
  const [username, setEmail] = useState<string>('emilys')
  const [password, setPassword] = useState<string>('emilyspass')
  const [isInvalidLogin, setIsInvalidLogin] = useState<boolean>(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

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
    }}>
      Welcome! 
      <Button 
        color="primary"
        disabled={isInvalidLogin}
        text="Login"
        wide={true}
        onCallback={() => {
            navigate('/login');
        }}
      />
      <Link to="/forgot-password" name="Forgot password" />
    </Card>
  </div>);
}
