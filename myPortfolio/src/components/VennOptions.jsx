import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function VennOptions() {
    const [roles, setRoles] = useState(["teacher", "researcher", "developer"]);
    const navigate = useNavigate();

    const handleCircleClick = (role) => {
        navigate(`/${role}`);
        const newRoles = roles.filter(r => r !== role);
        newRoles.unshift(role);
        setRoles(newRoles);
    };

    const circleClass = "w-32 h-32 rounded-full flex items-center justify-center mx-2 cursor-pointer z-20 transition-transform duration-500 ease-in-out transform hover:scale-110 border-slate-100 border-2";
    const circleColours = {
        teacher: "bg-fuchsia-900/80",
        researcher: "bg-violet-900/80",
        developer: "bg-indigo-900/80"
    };

    return (
        <div className="flex flex-col items-center justify-center my-20 z-0">
            <div className="flex justify-center w-full mb-0">
                <div id={`circle-${roles[0]}`}
                     className={`${circleClass} ${circleColours[roles[0]]}`}
                     onClick={() => handleCircleClick(roles[0])}>
                    <h3 className="capitalize text-slate-100"><p>{roles[0]}</p></h3>
                </div>
            </div>
            <div className="flex justify-center w-full">
                <div id={`circle-${roles[1]}`}
                     className={`${circleClass} ${circleColours[roles[1]]}`}
                     onClick={() => handleCircleClick(roles[1])}>
                    <h3 className="capitalize text-slate-100"><p>{roles[1]}</p></h3>
                </div>
                <div id={`circle-${roles[2]}`}
                     className={`${circleClass} ${circleColours[roles[2]]}`}
                     onClick={() => handleCircleClick(roles[2])}>
                    <h3 className="capitalize text-slate-100"><p>{roles[2]}</p></h3>
                </div>
            </div>
        </div>
    );
}

export default VennOptions;
