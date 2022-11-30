import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DoctorDetails from './DoctorDetails';
import { useState } from 'react';
// import TimeSelect from './TimeSelect'

const DoctorSelect = ({ doctors, selectedDoctor, handleDocChange }) => {

    const [key, setKey] = useState(doctors[0].name);


    return (
        <div style={{ marginTop: "1rem" }}>
            {/* <label htmlFor="doctors">Who would you like to consult with: </label>
            <select value={selectedDoctor} onChange={handleDocChange} >
                <option value={"select Doctor"}>Select Doctor</option>
                {doctors.length &&
                    doctors.map(doctor => (
                        <option
                            key={doctor.id}
                            value={doctor.name}
                        >
                            {doctor.name}
                        </option>
                    ))
                }
            </select> */}
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                {doctors.length &&
                    doctors.map(doctor => (
                        <Tab eventKey={doctor.id} key={doctor.id} title={doctor.name}>
                            <DoctorDetails doctor={doctor} />
                        </Tab>
                    ))
                }

            </Tabs>

        </div>
    )
}

export default DoctorSelect
