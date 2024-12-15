import { Outlet, NavLink } from "react-router-dom";
import HeaderBar from './HeaderBar';
import VennOptions from './VennOptions'
import Introduction from './Introduction'
import FooterBar from './FooterBar';


const Layout = () => {

return (
    <div className="container mx-auto max-w-screen-lg">
        <HeaderBar />
        <nav>
            <VennOptions />
        </nav>
        <main>
            <Introduction />
            <Outlet />
        </main>
        <FooterBar />
    </div>
)
};

export default Layout;

{/* <nav>
<Link to="/role/teacher">Teacher</Link>
<Link to="/role/researcher">Researcher</Link>
<Link to="/role/developer">Developer</Link>
</nav> */}