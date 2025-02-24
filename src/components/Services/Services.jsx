import { useState, useMemo } from "react";
import "./Services.scss";

const Services = ({ servicesData }) => {
  const [activeService, setActiveService] = useState(servicesData[0]);

  const serviceImage = useMemo(() => {
    return <img src={activeService.image} alt={activeService.title} />;
  }, [activeService.image]);

  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="services-list">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`services-card ${
                activeService.id === service.id ? "active" : ""
              }`}
              onMouseEnter={() => setActiveService(service)}
            >
              {service.icon}
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>

        <div className="service-details">
          {serviceImage}
          <p>{activeService.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
