import HomeImage from "../components/HomeImage";
import DisplayHoodies from "../components/DisplayHoodies";
import Nav from "../components/Nav";



const Home = () => {
    return (
        <div className="body">
        
        <Nav />
        <HomeImage />
        <DisplayHoodies />
        </div>
    );
}

export default Home;

