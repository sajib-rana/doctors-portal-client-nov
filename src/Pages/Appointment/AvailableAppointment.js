import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Services from './Services';

const AvailableAppointment = ({date, setDate}) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null);
    useEffect(()=>{
        fetch('services.json')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])
    return (
      <div>
        <h2 className="text-2xl text-center text-accent">
          Available Appointment On : {format(date, "PP")}.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <Services
              key={service._id}
              service={service}
              setTreatment={setTreatment}
            ></Services>
          ))}
        </div>
        {treatment && (
          <BookingModal
            date={date}
            treatment={treatment}
            setTreatment={setTreatment}
          ></BookingModal>
        )}
      </div>
    );
};

export default AvailableAppointment;