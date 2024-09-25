import HomeHeader from "../../components/header-home/header";
import MainHome from "../../components/main-home/main-home";
import HomeFooter from "../../components/footer-home/footer";


export default function HomePage() {
    return (
        <div>
            <div className='gif'>
                <HomeHeader />
            </div>
            <MainHome />
            <HomeFooter />
        </div>
    )
}