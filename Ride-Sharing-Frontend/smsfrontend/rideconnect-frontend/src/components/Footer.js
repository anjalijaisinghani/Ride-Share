const Footer = () => (
  <footer
    style={{
      position: 'fixed',      // keeps it always at the bottom
      bottom: 0,
      left: 0,
      width: '100%',
      background: '#023e8a',
      color: 'white',
      textAlign: 'center',
      fontSize: '0.9rem',     // smaller text size
      padding: '0.5rem 0',
    }}
  >
    <p style={{ margin: 0 }}>© 2025 RideConnect. All rights reserved.</p>
  </footer>
);

export default Footer;


