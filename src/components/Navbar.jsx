import React, { useState } from "react";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import LanguageIcon from '@mui/icons-material/Language';
const Navbar = () => {
    const [open, setOpen] = useState(true);
    return (
        <>
            <div
                className={`${open ? "h-20" : "h-10"
                    } duration-300  bg-cyan-900 relative p-5 pt-8 font-serif`}
            >
                <div className="flex justify-center items-center text-center">

                    <h1 className={`text-4xl font-bold font-serif text-white ${!open && "scale-0"} `}>Countries </h1>
                    {!open && <LanguageIcon className="absolute mb-9 text-white" />}
                    <div className="flex justify-center items-center text-center ">

                    </div>
                </div>

                <ArrowCircleUpIcon className={`absolute flex justify-center items-center text-center right-5 top-5 text-white cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
            </div>
        </>
    );
};

export default Navbar;
