const Hero = ({ headerText }: { headerText: string }) => {
  return (
    <div className="heading-wrapper w-container">
      <h1 className="main-heading">{headerText}</h1>
      <a href="contact.html" className="button w-button">
        + Add a Plant
      </a>
    </div>
  );
};

export default Hero;
