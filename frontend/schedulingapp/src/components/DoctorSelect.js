import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DoctorDetails from './DoctorDetails';

const DoctorSelect = ({ doctors, handleTimeChange, handleDocChange }) => {

    return (
        <div style={{ marginTop: "1rem" }}>
            <p>Select a doctor to view available hours</p>
            <Tabs
                id="doctors"
                defaultActiveKey={doctors[0].id}
                onSelect={handleDocChange}
                className="mb-3"
            >
                {doctors.length &&
                    doctors.map(doctor => (
                        <Tab
                            eventKey={doctor.id}
                            key={doctor.id}
                            title={doctor.name}
                        >
                            <DoctorDetails doctor={doctor} handleTimeChange={handleTimeChange} />
                        </Tab>
                    ))
                }

            </Tabs>

        </div>
    )
}

export default DoctorSelect
