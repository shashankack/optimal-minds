import { FaUserMd, FaBrain, FaHandsHelping, FaHeartbeat, FaChild, FaRegSmile } from "react-icons/fa";

export const servicesData = [
  {
    id: 1,
    title: "Psychiatry",
    description: "Expert psychiatric care for ADHD, anxiety, depression, bipolar disorder, and more.",
    icon: <FaUserMd className="service-icon" />,
    image: "https://placehold.co/1200?text=Psychiatry"
  },
  {
    id: 2,
    title: "Neuropsychiatry",
    description: "Advanced neuropsychiatric interventions for cognitive and emotional well-being.",
    icon: <FaBrain className="service-icon" />,
    image: "https://placehold.co/1200?text=Neuropsychiatry"
  },
  {
    id: 3,
    title: "Counseling & Therapy",
    description: "Personalized counseling for individuals, couples, and families.",
    icon: <FaHandsHelping className="service-icon" />,
    image: "https://placehold.co/1200?text=Counseling+%26+Therapy"
  },
  {
    id: 4,
    title: "Mindfulness & Wellness",
    description: "Holistic therapies including stress management and mindfulness training.",
    icon: <FaHeartbeat className="service-icon" />,
    image: "https://placehold.co/1200?text=Mindfulness+%26+Wellness"
  },
  {
    id: 5,
    title: "Child & Adolescent Mental Health",
    description: "Specialized care for children with ADHD, autism, and emotional disorders.",
    icon: <FaChild className="service-icon" />,
    image: "https://placehold.co/1200?text=Child+Mental+Health"
  },
  {
    id: 6,
    title: "Senior Mental Health",
    description: "Comprehensive care for dementia, elderly depression, and neurodegenerative conditions.",
    icon: <FaRegSmile className="service-icon" />,
    image: "https://placehold.co/1200?text=Senior+Mental+Health"
  }
];
