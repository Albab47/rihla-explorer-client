import useAuth from "../hooks/useAuth";

const HomePage = () => {
    const {msg} = useAuth()
    
    return (
        <>
            <h2 className='text-xl text-center text-amber-600 mt-12 container mx-auto'>Home Page coming soon...</h2>
            <p>{msg}</p>
        </>
    );
};

export default HomePage;