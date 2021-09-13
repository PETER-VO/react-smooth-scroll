import React from 'react';
import {
	Container,
	FormWrap,
	Icon,
	Form1,
	FormContent,
	FormLabel,
	FormInput,
	Form,
	FormButton,
	Text,
} from './SigninElements';

const SignIn = () => {
	return (
		<>
			<Container>
				<FormWrap>
					<Icon to='/'>dolla</Icon>
					<FormContent>
						<Form action='#'>
							<Form1>Sign in to your account</Form1>
							<FormLabel htmlFor='for'>Email</FormLabel>
							<FormInput required type='email' />
							<FormLabel htmlFor='for'>Password</FormLabel>
							<FormInput required type='password' />
							<FormButton type='submit'>Continue</FormButton>
							<Text>Forgot password</Text>
						</Form>
					</FormContent>
				</FormWrap>
			</Container>
		</>
	);
};

export default SignIn;
