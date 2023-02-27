import ScrollToTop from "./ScrollToTop";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrapper">
        <p>&copy;{year} All rights reserve.</p>
      </div>
      <ScrollToTop />
    </footer>
  );
};

export default Footer;
