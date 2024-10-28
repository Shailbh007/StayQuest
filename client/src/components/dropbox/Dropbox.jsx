
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function Dropbox() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        {name:'All',code:'ALL'},
        { name: 'Hostel', code: 'HS' },
        { name: 'PG', code: 'PG' },
        { name: 'Lodge', code: 'LOD' },
        { name: 'Dormitories', code: 'DOR' },
        { name: 'Apartment', code: 'APT' }
    ];
    

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Accomodtion Type" className="w-full md:w-14rem" />
        </div>
    )
}
        