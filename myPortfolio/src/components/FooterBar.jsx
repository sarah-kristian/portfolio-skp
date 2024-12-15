import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function FooterBar() {
    return (
        <>
        <br/>
        <footer className="text-center py-2 bg-blue-500 text-white">
            <p>&copy; {new Date().getFullYear()} Sarah Perry. All rights reserved.</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1em', color: '#fff' }}>
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1em', color: '#fff' }}>
                    <FaLinkedin />
                </a>
            </div>
        </footer>
        </>
    );
}

export default FooterBar