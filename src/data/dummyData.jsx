import {
  FaUserMd,
  FaBrain,
  FaHandsHelping,
  FaHeartbeat,
  FaChild,
  FaRegSmile,
} from "react-icons/fa";
import psychiatry from "../assets/images/services/psychiatry.jpg";
import neuropsychiatry from "../assets/images/services/neuropsychiatry.jpg";
import counseling from "../assets/images/services/counseling.jpg";
import mindfulness from "../assets/images/services/mindfulness.jpg";
import childMentalHealth from "../assets/images/services/child.jpg";
import seniorMentalHealth from "../assets/images/services/senior.jpg";

export const servicesData = [
  {
    id: 1,
    title: "Psychiatry",
    description:
      "Expert psychiatric care for ADHD, anxiety, depression, bipolar disorder, and more.",
    icon: <FaUserMd className="service-icon" />,
    image: psychiatry,
  },
  {
    id: 2,
    title: "Neuropsychiatry",
    description:
      "Advanced neuropsychiatric interventions for cognitive and emotional well-being.",
    icon: <FaBrain className="service-icon" />,
    image: neuropsychiatry,
  },
  {
    id: 3,
    title: "Counseling & Therapy",
    description:
      "Personalized counseling for individuals, couples, and families.",
    icon: <FaHandsHelping className="service-icon" />,
    image: counseling,
  },
  {
    id: 4,
    title: "Mindfulness & Wellness",
    description:
      "Holistic therapies including stress management and mindfulness training.",
    icon: <FaHeartbeat className="service-icon" />,
    image: mindfulness,
  },
  {
    id: 5,
    title: "Child & Adolescent Mental Health",
    description:
      "Specialized care for children with ADHD, autism, and emotional disorders.",
    icon: <FaChild className="service-icon" />,
    image: childMentalHealth,
  },
  {
    id: 6,
    title: "Senior Mental Health",
    description:
      "Comprehensive care for dementia, elderly depression, and neurodegenerative conditions.",
    icon: <FaRegSmile className="service-icon" />,
    image: seniorMentalHealth,
  },
];

export const testimonials = [
  {
    quote:
      "Optimal Minds changed my life. The compassionate care and personalized treatment helped me overcome my anxiety like never before.",
  },
  {
    quote:
      "I finally feel heard and understood. The doctors here truly take the time to understand your concerns and offer the best possible solutions.",
  },
  {
    quote:
      "Their holistic approach made a world of difference for my son. The support and guidance we received have been invaluable.",
  },
  {
    quote:
      "After struggling with OCD for years, the therapy and advanced interventions at Optimal Minds gave me a new perspective and control over my life.",
  },
  {
    quote:
      "From the initial consultation to the ongoing support, everything about this clinic speaks of professionalism and genuine care.",
  },
  {
    quote:
      "I was skeptical about seeking help, but now I wish I had come here sooner. The team is incredibly skilled and empathetic.",
  },
];

export const faqData = [
  {
    question:
      "What is the difference between a psychiatrist and a psychologist?",
    answer:
      "Psychiatrists are medical doctors who specialize in mental health. They can diagnose and treat mental health conditions, prescribe medications, and provide therapy. Psychologists, on the other hand, are mental health professionals who have a doctoral degree in psychology. They can provide therapy, counseling, and psychological testing, but they cannot prescribe medications.",
  },
  {
    question: "How do I know if I need to see a psychiatrist?",
    answer:
      "If you are experiencing symptoms of a mental health condition, such as depression, anxiety, or mood swings, it may be helpful to see a psychiatrist. Other signs that you may benefit from psychiatric care include difficulty functioning at work or school, relationship problems, or thoughts of self-harm.",
  },
  {
    question: "What should I expect during my first visit to a psychiatrist?",
    answer:
      "During your first visit to a psychiatrist, they will ask you about your medical history, symptoms, and any medications you are currently taking. They may also perform a physical exam or order lab tests to rule out any underlying medical conditions. Based on this information, they will develop a treatment plan tailored to your needs.",
  },
  {
    question: "How long does it take for psychiatric medications to work?",
    answer:
      "The time it takes for psychiatric medications to work can vary depending on the individual and the type of medication. Some medications may start to work within a few days, while others may take several weeks to reach their full effect. It is important to follow your doctor's instructions and attend follow-up appointments to monitor your progress.",
  },
  {
    question: "What is the difference between therapy and counseling?",
    answer:
      "Therapy and counseling are both forms of mental health treatment that involve talking to a trained professional. Therapy typically refers to longer-term treatment that focuses on exploring deeper issues and making lasting changes. Counseling, on the other hand, is usually more short-term and solution-focused, addressing specific problems or challenges.",
  },
  {
    question: "How can I find the right therapist for me?",
    answer:
      "Finding the right therapist for you involves considering factors such as their qualifications, experience, and approach to treatment. It is important to feel comfortable and supported by your therapist, so it may be helpful to schedule an initial consultation to see if you are a good fit. You can also ask for recommendations from your doctor or trusted friends and family.",
  },
];
