const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrapper">
        <p>&copy;{year} All rights reserve.</p>
      </div>
    </footer>
  );
};

export default Footer;
