import React from 'react';
import './Consultation.css'
const Consultation = () => {
    return (
        <section id="consultation">
            <h2>Doctor Consultation</h2>
            <ul className='doctors-consult'>
                <li>Dr.Kamran- Pulmonologist</li>
                <li>Dr. Fasih - Dentist</li>
                <li>Dr. Ali - General Practitioner</li>
            </ul>
        </section>
    );
};

export default Consultation;
