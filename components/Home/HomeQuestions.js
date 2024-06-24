import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
      title: "Does Unifi Cars offer home inspection?",
      details:
        "Yes, Unifi Cars offers a free home inspection for your convenience. Our car expert visits your location and assess your car. Our car expert will inspect your car and our company gives you a fair price. This service ensures an excellent sales experience without having to travel. Contact Unifi Cars today to schedule a home inspection of your vehicle.",
    },
    {
      panel: "panel2",
      title: "How can I register my car for the car inspection?",
      details:
        "For the inspection of your car, you have to reserve a time slot according to your preferences. Our time slot starts at 9 am and ends in the evening. To fix the inspection, you have to visit our website and make a call, and our team will book the slot for the car inspection. Our car experts examine the vehicle, and our company offers you the best market price for your car in just few minutes.",
    },
    {
      panel: "panel3",
      title: "Why is Unifi cars the best place to sell my car online?",
      details:
        "Unifi Cars is the best place to sell your car with so many reasons. Firstly, they offer the competitive prices and ensures the hassle-free selling experience and next they provide the free home inspection process for the convenient of the sellers. Unifi cars has the reputation of professionalism and reliability making them trusted choice for selling your car.",
    },
    {
      panel: "panel4",
      title: "Does Unifi cars buy commercial cars?",
      details: "No, Unifi cars does not deal in commercial cars.",
    },
    {
      panel: "panel5",
      title: "Is it compulsory to book the appointment in advance?",
      details:
        "Yes, by booking an appointment in advance, we will book that time slot for you that is suitable for you.",
    },
    {
      panel: "panel6",
      title: "Is there any charge of the car’s Inspection?",
      details:
        "No, we don’t charge any fee for the inspection. This service is absolutely free.",
    },
    {
      panel: "panel7",
      title: "How long will it take for my car's inspection?",
      details:
        "Car inspection at least takes 45 minutes in which our car experts examine your car from every angle. We have 210 check points by completing all the examine points you will get the estimate value of your car in few minutes.",
    },
  ];

  return (
    <div className="my-16 md:flex">
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
