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
        "PAPO Token is a cryptocurrency designed to support and fund startups and educational projects in Africa, enhancing economic growth and development through blockchain technology.",
    },
    {
      question: "On which blockchain is PAPO Token?",
      answer: "Solana blockchain",
    },
    {
      question:
        "What is the official contract address and symbol for the PAPO Token?",
      answer: "$PAPO - Coming soon",
    },
    {
      question: "How can I get $PAPO?",
      answer:
        "Raydium is the easiest way. use Solana to acquire $PAPO instantly on Raydium exchange",
    },
    {
      question: "What else should i know?",
      answer:
        "$PAPO tokens are intended to function as a means of support and engagement with startups and educational projects within the blockchain ecosystem. Ownership of $PAPO tokens represents a commitment to the ideals and mission of supporting entrepreneurial growth and does not constitute an investment opportunity, investment contract, or security of any type. PAPO project is solely focused on fostering community support and innovation in the blockchain space and is not associated with any political campaign, political office, or governmental agency. There are no guarantees provided on returns or outcomes; participation is solely for the purpose of supporting and engaging with startup projects.",
    },
    {
      question: "How can startups apply for funding?",
      answer: "Follow this form to apply https://forms.gle/bsVUvLWwUby5cD2t9",
    },
    {
      question: "Whats the maximum $PAPO supply?",
      answer: "100,000,000 $PAPO",
    },
    // {
    //   question: "What makes $PAPO different from other cryptocurrencies?",
    //   answer:
    //     "-$PAPO Token addresses this by facilitating accessible, blockchain-based funding for innovative projects and entrepreneurs dedicated to economic and social impact.",
    // },
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
