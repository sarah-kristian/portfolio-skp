import { FaDownload } from "react-icons/fa";

function HeaderBar() {
    const navigateToHome = () => {
        window.location.href = "/";
    };

    return (
        <header className="py-2 bg-blue-500" onClick={navigateToHome}>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-center flex-grow text-slate-100 ml-10">
                    Sarah&apos;s Portfolio
                </h1>
                <div className="flex-shrink-1 mr-10">
                    <a id="resume" href="/path/to/resume.pdf" download className="resume text-slate-100" title="Download Resume"><FaDownload /></a>
                </div>
            </div>
        </header>
    );
}

export default HeaderBar;