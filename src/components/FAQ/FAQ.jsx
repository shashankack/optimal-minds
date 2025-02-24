import { useState } from "react";
import "./FAQ.scss";

const FAQ = ({ data, title }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>{title}</h2>
      {data.map((item, index) => (
        <div
          onClick={() => toggleFAQ(index)}
          key={index}
          className={`faq-item ${openIndex === index ? "open" : ""}`}
        >
          <div className="faq-question">
            <h3>{item.question}</h3>
            <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
          </div>
          <div
            className="faq-answer"
            style={{ maxHeight: openIndex === index ? "200px" : "0" }}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
