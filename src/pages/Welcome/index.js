import {useNavigate} from 'react-router-dom' 

const Welcome = () => {
    const navigate = useNavigate();

    return (
        <div className='welcome'>
            <h1>Welcome</h1>
            <button 
				onClick={() => {
					navigate("/")
				}}
			>
				Back Homepage
			</button>
        </div>
    )
};

export default Welcome;