import React from "react";
import { ArrowRight } from "lucide-react";

const ServiceSection = ({
  title,
  description,
  links,
  bgColor = "bg-blue-50",
}) => (
  <div
    className={`${bgColor} p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100`}
  >
    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
      {title}
    </h2>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.url}
            className="flex items-center text-blue-600 hover:text-blue-800 hover:underline group"
          >
            <ArrowRight className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const InfoSection = ({
  title,
  description,
  links,
  bgColor = "bg-green-50",
}) => (
  <div
    className={`${bgColor} p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100`}
  >
    <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
    <p className="text-gray-600 mb-4">{description}</p>
    {links && (
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              className="flex items-center text-blue-600 hover:text-blue-800 hover:underline group"
            >
              <ArrowRight className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const AadhaarServices = () => {
  const services = [
    {
      title: "Get Aadhaar",
      description:
        "Aadhaar is for every Resident of India. From a new born to a senior citizen, everyone can enrol for Aadhaar.",
      links: [
        { text: "Locate an Enrolment Center", url: "https://appointments.uidai.gov.in/easearch.aspx" },
        { text: "Check Aadhaar Status", url: "https://resident.uidai.gov.in/check-aadhaar" },
        { text: "Download Aadhaar", url: "https://myaadhaar.uidai.gov.in/genricDownloadAadhaar" },
        {
          text: "Retrieve Lost or Forgotten EID/UID",
          url: "https://resident.uidai.gov.in/lost-uideid",
        },
        { text: "Order Aadhaar Reprint", url: "/order-reprint" },
        { text: "Check Reprint Status", url: "/check-reprint-status" },
      ],
      bgColor: "bg-blue-50",
    },
    {
      title: "Update Aadhaar",
      description:
        "Keep your Aadhaar details up-to-date. It is essential that your Aadhaar Data is correct and remains updated always.",
      links: [
        {
          text: "Update Aadhaar at Enrolment/Update Center",
          url: "https://appointments.uidai.gov.in/GenericErrorPage.htm?aspxerrorpath=/easearch.aspx",
        },
        { text: "Check Aadhaar Update Status", url: "https://resident.uidai.gov.in/check-aadhaar" },
        { text: "Update your address online", url: "https://ssup.uidai.gov.in/ssup/" },
        {
          text: "Request for Address Validation Letter",
          url: "https://ssup.uidai.gov.in/ssup/",
        },
        {
          text: "Check Address Update Status",
          url: "https://ssup.uidai.gov.in/checkSSUPStatus/checkupdatestatus",
        },
        { text: "Aadhaar Update History", url: "https://resident.uidai.gov.in/aadhaar-updatehistory" },
      ],
      bgColor: "bg-purple-50",
    },
    {
      title: "Aadhaar Services",
      description:
        "An array of services for Aadhaar holders. Aadhaar Registered Mobile number is essential to access the following services.",
      links: [
        { text: "Verify an Aadhaar Number", url: "https://resident.uidai.gov.in/verify" },
        { text: "Verify Email/Mobile Number", url: "https://resident.uidai.gov.in/verify-email-mobile" },
        {
          text: "Retrieve Lost or Forgotten EID/UID",
          url: "https://resident.uidai.gov.in/lost-uideid",
        },
        { text: "Virtual ID (VID) Generator", url: "https://resident.uidai.gov.in/vid-generation" },
        { text: "Check Authentication History", url: "https://resident.uidai.gov.in/offline-kyc" },
        { text: "Lock/Unlock Biometrics", url: "https://resident.uidai.gov.in/bank-mapper" },
        { text: "Generate Virtual ID", url: "https://resident.uidai.gov.in/bio-lock" },
        { text: "Check Bank Linking Status", url: "https://resident.uidai.gov.in/aadhaar-auth-history" },
        { text: "Download e-Aadhaar", url: "https://resident.uidai.gov.in/aadhaar-lockunlock" },
        { text: "Adhar Service on SMS", url: "https://uidai.gov.in/en/my-aadhaar/avail-aadhaar-services/aadhaar-services-on-sms.html" },
      ],
      bgColor: "bg-indigo-50",
    },
  ];

  const infoSections = [
    {
      title: "What is Aadhaar?",
      description:
        "Aadhaar is a verifiable 12-digit identification number issued by UIDAI to the resident of India for free of cost.",
      links: [
        { text: "Aadhaar Mythbusters", url: "https://uidai.gov.in/images/recently_asked_ques_13012018.pdf" },
        { text: "The Aadhaar Act", url: "https://uidai.gov.in/what-is-aadhaar/the-aadhaar-act.html" },
      ],
      bgColor: "bg-green-50",
    },
    {
      title: "Aadhaar Ecosystem",
      description:
        "Aadhaar ecosystem comprises of core infrastructures with the objective of providing enrolment, update & authentication services.",
      links: [
        { text: "Enrolment & Update Ecosystem Training", url: "/https://uidai.gov.in/ecosystem/enrolment-ecosystem/enrolment-agencies.html" },
        { text: "Authentication Ecosystem", url: "https://uidai.gov.in/aadhaar-eco-system/authentication-ecosystem.html" },
        { text: "Testing & Certification Ecosystem", url: "https://uidai.gov.in/en/aadhaar-eco-system/training-testing-certification-ecosystem.html" },
      ],
      bgColor: "bg-yellow-50",
    },
  ];

  return (
    <div className=" min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-white mb-4">
            AADHAAR SERVICES
          </h1>
          <div className="flex justify-end">
            <img
              src="./public/download(1).jpeg"
              alt="Aadhaar Cards"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceSection
              key={index}
              title={service.title}
              description={service.description}
              links={service.links}
              bgColor={service.bgColor}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {infoSections.map((section, index) => (
            <InfoSection
              key={index}
              title={section.title}
              description={section.description}
              links={section.links}
              bgColor={section.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AadhaarServices;
