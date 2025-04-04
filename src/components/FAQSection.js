import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const textStyle = {
    fontSize: "4rem",
    fontWeight: "900",
    textShadow: "18px 22px 1px #ffffff38",
    textAlign: "center",
    paddingTop: "40px",
  };

  const faqs = [
    {
      question: "What is $PAPO Token?",
      answer:
        "-PAPO Token is designed to drive sustainable economic growth across Africa by providing crucial funding for startups, small businesses, and educational projects focused on Web3 technology. Join us in building a decentralized future where innovation leads to opportunity for all.",
    },
    {
      question: "How can I buy $PAPO Tokens?",
      answer: "-You can buy $PAPO Tokens using the Solana address on Raydium",
    },
    {
      question: "What makes $PAPO different from other cryptocurrencies?",
      answer:
        "-$PAPO Token addresses this by facilitating accessible, blockchain-based funding for innovative projects and entrepreneurs dedicated to economic and social impact.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <h2>FAQ</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
          <h3>{faq.question}</h3>
          {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
        </div>
      ))}
    </section>
  );
};

export default FAQSection;
