import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import BackgroundTypo from 'components/BackgroundTypo';

const Layout = ({ children }) => {
  return (
    <>
      <BackgroundTypo />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
