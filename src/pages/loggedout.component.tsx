import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { signOutStart } from '../redux/auth/auth.actions';

interface LoggedOutProps {}

const LoggedOut: React.FC<LoggedOutProps> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(signOutStart());
  }, [dispatch]);
  return (
    <div>
      logged out
    </div>
  )
}

export default LoggedOut
