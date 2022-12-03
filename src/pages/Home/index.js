import UseRef from "../../components/UseRef";
import UseRef2 from "../../components/UseRef2";
import Memo from "../../components/Memo";
import UseInput from "../../components/UseInput";
import UseHover from "../../components/UseHover";
import UseLocalStorage from "../../components/UseLocalStorage";

const Home = () => {
    return (
        <div className='home'>
            <h1>Home</h1>
            <UseLocalStorage />
        </div>
    )
};

export default Home;