import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Loader from '../components/Loader/Loader';

const MainLayout = () => {
    const navigation = useNavigation()
    const isLoading = navigation.state === "loading";
    
    return (
        <div className="dark:bg-gray-700">
            {isLoading && <Loader />}
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;