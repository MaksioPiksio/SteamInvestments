import React from "react";

function Navbar({ currencyArray, currency, setCurrency }) {
    return (
        <div className=" w-screen flex justify-center m-4 gap-4">
            {currencyArray.map((name, idx) => (
                <button
                    onClick={() => setCurrency(name)}
                    className={`text-white ${
                        name == currency && "bg-zinc-900"
                    } py-2 px-4 rounded text-center cursor-pointer`}
                    key={idx}>
                    {name}
                </button>
            ))}
        </div>
    );
}

export default Navbar;
