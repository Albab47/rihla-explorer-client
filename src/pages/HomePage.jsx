import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const HomePage = () => {
    const {msg} = useContext(AuthContext)
    
    return (
        <>
            <h2 className='text-xl text-center text-amber-600 mt-12 container mx-auto'>Home Page coming soon...</h2>
            <p>{msg}</p>
        </>
    );
};

export default HomePage;