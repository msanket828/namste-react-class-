const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrapper">
        <h2>&copy;{year} All rights reserve.</h2>
      </div>
    </footer>
  );
};

export default Footer;
