import Navbar from "./navbar/navbar";

const Layout = ({ children }) => {
    return (
        <div className="bg-gray-100">
        <Navbar />
        {children}
        </div>
    );
}

export default Layout;
