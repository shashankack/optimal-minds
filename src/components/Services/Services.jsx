import { useState } from "react";
import "./Services.scss";

const Services = ({ servicesData }) => {
  const [activeService, setActiveService] = useState(servicesData[0]);

  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-container">
        {/* Left Side - Services List */}
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
          <img src={activeService.image} alt={activeService.title} />
          <p>{activeService.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
