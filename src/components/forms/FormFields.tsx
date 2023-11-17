import { useState } from 'react';

export default function FormFields() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	return (
		<div className='space-y-8'>
			<form className='space-y-4'>
				<div className='bg-gray-200 space-x-4 p-2'>
					<label htmlFor='firstName'>First Name</label>
					<input
						type='text'
						id='firstName'
						onChange={(e) => {
							setFirstName(e.target.value);
						}}
					/>
				</div>

				<div className='bg-gray-200 space-x-4 p-2'>
					<label htmlFor='lastName'>Last Name</label>
					<input
						type='text'
						id='lastName'
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>

				<div className='bg-gray-200 space-x-4 p-2'>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						id='email'
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className='bg-gray-200 space-x-4 p-2'>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						id='password'
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<div className='bg-gray-200 space-x-4 p-2'>
					<label htmlFor='confirmPassword'>Confirm Password</label>
					<input
						type='password'
						id='confirmPassword'
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</div>
			</form>
			<div>
				<h1> Your Form Data </h1>
				<div className='space-x-4'>
					<span>First Name: </span>
					<span>{firstName}</span>
				</div>

				<div className='space-x-4'>
					<span>Last Name: </span>
					<span>{lastName}</span>
				</div>

				<div className='space-x-4'>
					<span>Email: </span>
					<span>{email}</span>
				</div>

				<div className='space-x-4'>
					<span>Password: </span>
					<span>{password}</span>
				</div>

				<div className='space-x-4'>
					<span>Confirm Password: </span>
					<span>{confirmPassword}</span>
				</div>
			</div>
		</div>
	);
}
