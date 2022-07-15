import { useAuthenticationStatus } from '@nhost/react'
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from './Spinner';

const ProtectRoute = ({children}) => {
	const { isAuthenticated, isLoading } = useAuthenticationStatus();
	const location = useLocation();
        
	if (isLoading) {
		return (
			<div className='h-screen flex items-center justify-center'>
				<Spinner/>
			</div>
		);
	}

	if (isAuthenticated) {
		return <Navigate to="/SignInPage" state={{ from: location }} replace />;
	}
	return children;
};

export default ProtectRoute