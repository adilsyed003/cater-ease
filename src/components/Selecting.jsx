import React from "react";
import { useNavigate } from "react-router-dom";

export default function Selecting() {
    const navigate = useNavigate();

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue) {
            navigate(`/service/${selectedValue}`); // Navigate to the dynamic endpoint
        }
    };

    return (
        <select
            onChange={handleSelectChange}
            className="w-[130px] text-gray-950 border border-gray-300 rounded-md p-2"
        >
            <option value="" disabled selected>
                Menu
            </option>
            <option value="1">Birthday Menu</option>
            <option value="2">Wedding Anniversary</option>
            <option value="3">Seematham Menu</option>
            <option value="4">Mehandi Ceremony</option>
            <option value="5">Reception Menu</option>
            <option value="6">Engagement Menu</option>
            <option value="7">Corporate Menu</option>
        </select>
    );
}
