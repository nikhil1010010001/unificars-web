import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const HomeQuestions = () => {
  const [expanded, setExpanded] = useState({});

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [panel]: isExpanded ? panel : false,
    }));
  };

  const panels = [
    {
      panel: "panel1",
      title: "Does Unifi Cars offer home inspections?",
      details:
        "Yes, Unifi Cars offers a free home inspection for your convenience. Our car expert visits your location and examines your car. Our car expert will inspect your car, and our company will give you a fair price. This service ensures an excellent sales experience without having to travel.",
    },
    {
      panel: "panel2",
      title: "How can I register my car for the car inspection?",
      details:
        "You can easily register your car for inspection just by visiting our website and entering your car number. After that, your request will be registered, and our team will contact you to schedule your appointment.",
    },
    {
      panel: "panel3",
      title: "Why is Unifi Cars the best place to sell my car online?",
      details:
        "Unifi Cars is the best place to sell your car for many reasons. Firstly, we offer competitive prices and ensure a hassle-free selling experience. Secondly, we offer a free home inspection process for the convenience of sellers.",
    },
    {
      panel: "panel4",
      title: "Does Unifi Cars buy commercial cars?",
      details: "No, Unifi Cars does not deal in commercial vehicles.",
    },
    {
      panel: "panel5",
      title: "Is it mandatory to book an appointment in advance?",
      details:
        "Yes, by booking an appointment in advance, we will reserve the time slot according to your preferences.",
    },
    {
      panel: "panel6",
      title: "Is there any charge for the car’s inspection?",
      details:
        "No, we don’t charge any fee for the inspection. This service is absolutely free.",
    },
    {
      panel: "panel7",
      title: "How long will it take for my car's inspection?",
      details:
        "A car inspection takes at least 45 minutes, during which our car experts examine your car from interior to exterior.",
    },
  ];

  // JSON-LD structured data for FAQ
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: panels.map((panel, index) => ({
      "@type": "Question",
      name: panel.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: panel.details,
      },
    })),
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(schemaData);

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [schemaData]);

  return (
    <div className="my-12 md:flex">
      <div className="w-full md:w-5/12 mx-auto">
        <div className="text-center items-center flex flex-col">
          <h2 className="text-4xl text-[#000] my-2 text-left font-black sellheadfont">
            Common <br />
            Questions
          </h2>
        </div>
      </div>
      <div className="w-full md:w-7/12 mx-auto">
        {panels.map((panel) => (
          <Accordion
            key={panel.panel}
            className="md:w-4/5"
            expanded={expanded[panel.panel]}
            onChange={handleAccordionChange(panel.panel)}
            style={{ boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={expanded[panel.panel] ? <RemoveIcon /> : <AddIcon />}
              aria-controls={`${panel.panel}a-content`}
              id={`${panel.panel}a-header`}>
              <Typography
                className={`${
                  expanded[panel.panel] ? "text-orange-500" : "text-black"
                } font-bold text-xl font-sans`}>
                <span className="font-sans">{panel.title}</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-sm changehomwq font-sans">
                <span className="font-sans">{panel.details}</span>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default HomeQuestions;
