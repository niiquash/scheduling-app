import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const UselessComponent = () => {
    return (
        <div>
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="Home">
                    <div>1</div>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <div>2</div>
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    <div>3</div>
                </Tab>
            </Tabs>
        </div>
    )
}

export default UselessComponent
