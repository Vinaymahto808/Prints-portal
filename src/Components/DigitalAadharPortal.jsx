const DigitalService = ({ icon, title, buttonText, buttonLink }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center" style={{ background: 'rgb(238,174,202)', background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(111,152,199,1) 100%)' }}>
    <div className="w-32 h-32 mb-4">
      <img src={icon} alt={title} className="w-full h-full object-contain" />
    </div>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <a
      href={buttonLink}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-orange-300 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors mt-auto"
    >
      {buttonText}
    </a>
  </div>
);

const DigitalAadharPortal = () => {
  const digitalServices = [
    {
      icon: "/public/Esharam.png",
      title: "E-SHRAM CARD",
      buttonText: "APPLY",
      buttonLink: "https://eshram.gov.in/",
    },
    {
      icon: "/public/Health.jpg",
      title: "HEALTH CARD",
      buttonText: "APPLY",
      buttonLink: "https://abha.abdm.gov.in/abha/v3/register",
    },
    {
      icon: "/public/farmerre.png",
      title: "COVID 19 REGISTER",
      buttonText: "Register",
      buttonLink: "https://selfregistration.cowin.gov.in/",
    },
    {
      icon: "/public/covidC.avif",
      title: "COVID CERTIFICATE",
      buttonText: "Download",
      buttonLink: "https://selfregistration.cowin.gov.in/",
    },
    {
      icon: "/public/farmerR.jpg",
      title: "KISAN SAMMAN NIDHI APPLY\n(All State)",
      buttonText: "APPLY",
      buttonLink: "https://pmkisan.gov.in/registrationformnew.aspx",
    },
    {
      icon: "/public/images.jpeg",
      title: "RATION CARD LIST\n(JHARKHAND)",
      buttonText: "Open",
      buttonLink: "https://jsfss.jharkhand.gov.in/",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-center text-gray-700 mb-2">
            We're Provided Best Digital Services!
          </h1>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalServices.map((service, index) => (
              <DigitalService
                key={index}
                icon={service.icon}
                title={service.title}
                buttonText={service.buttonText}
                buttonLink={service.buttonLink}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 py-4 text-center text-gray-600">
        <p>&copy; 2023 Digital Aadhar Portal</p>
      </footer>
    </div>
  );
};

export default DigitalAadharPortal;