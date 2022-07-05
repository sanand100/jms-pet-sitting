import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignInForm from './components/SignInForm/SignInForm';
import SignUpForm from './components/SignUpForm/SignUpForm';


function App() {
  return (
		<div className='App'>

			<SignInForm/>
      {/* <SignUpForm/> */}
		</div>
	);
}

export default App;
