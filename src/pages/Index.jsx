import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#f8f9fa',
      padding: '20px 0',
      marginTop: '40px',
      borderTop: '1px solid #e7e7e7'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <p style={{ margin: 0 }}>© 2023 Your Company. All rights reserved.</p>
        <div>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{
            color: '#333',
            fontSize: '1.5rem',
            marginRight: '15px'
          }}>
            <FaGithub />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{
            color: '#1DA1F2',
            fontSize: '1.5rem',
            marginRight: '15px'
          }}>
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{
            color: '#0077B5',
            fontSize: '1.5rem'
          }}>
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;