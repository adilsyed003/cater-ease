import React from "react";
import { useNavigate } from "react-router-dom";

export default function Selecting() {
    const navigate = useNavigate();

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue) {
            navigate(selectedValue); // Navigate to the selected endpoint
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
            <option value="/birthday-menu">Birthday Menu</option>
            <option value="/wedding-anniversary">Wedding Anniversary</option>
            <option value="/seematham-menu">Seematham Menu</option>
            <option value="/mehandi-ceremony">Mehandi Ceremony</option>
            <option value="/reception-menu">Reception Menu</option>
            <option value="/engagement-menu">Engagement Menu</option>
            <option value="/corporate-menu">Corporate Menu</option>
        </select>
    );
}
