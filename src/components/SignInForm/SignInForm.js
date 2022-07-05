import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './SignInForm.css';

function SignInForm(props) {
	const initialFormState = {
		username: '',
		password: '',
	};

	const [formState, setFormState] = useState(initialFormState);

	function handleChange(event) {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log('you clicked me');
		console.log(formState);
		// setFormState(initialFormState);
	}

	return (
		<Container id='main-container' style={{ height: '100vh', display: 'grid' }}>
			<Form
				onSubmit={handleSubmit}
				id='sign-in-form'
				className='text-center w-100'
				style={{
					padding: '1em 3em',
					boxShadow: '0 4px 15px 0',
					backgroundColor: 'rgb(250,250,255)',
				}}>
				<img
					className='mb-4 mt-2 JMS-Logo'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png'
					alt='JMS Logo'
				/>
				<h1 className='mb-5 fs-3 fw-normal'>Please Sign in</h1>
				<Form.Group controlId='username'>
					<Form.Control
						type='email'
						size='lg'
						placeholder='Email address'
						autoComplete='username'
						className='position-relative mb-1'
						value={formState.username}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='password'>
					<Form.Control
						type='password'
						size='lg'
						placeholder='Password'
						autoComplete='current-password'
						className='position-relative mb-4'
						value={formState.password}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group
					controlId='remember-me'
					className='d-flex justify-content-center mb-5'>
					<Form.Check label='Remember me' />
				</Form.Group>
				<div className='d-grid mb-5'>
					<Button variant='primary' size='lg' type='submit'>
						Sign In
					</Button>
				</div>
				<p className='text-muted'>&copy; 2021-2022</p>
			</Form>
		</Container>
	);
}

export default SignInForm;
