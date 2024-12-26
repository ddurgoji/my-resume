// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';  // Importing social media icons

const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const SocialLink = styled.a`
  font-size: 2rem;
  color: #fff;
  transition: color 0.3s ease;

  &:hover {
    color: #2196f3;  // Highlight color on hover
  }
`;

const CopyrightText = styled.p`
  font-size: 1rem;
  color: #bbb;
  margin-top: 10px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        {/* Social Icons */}
        <SocialLinks>
          <SocialLink href="https://www.linkedin.com/in/johndoe/" target="_blank" aria-label="LinkedIn">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="https://github.com/johndoe" target="_blank" aria-label="GitHub">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://twitter.com/johndoe" target="_blank" aria-label="Twitter">
            <FaTwitter />
          </SocialLink>
          <SocialLink href="mailto:johndoe@example.com" target="_blank" aria-label="Email">
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>

        {/* Copyright */}
        <CopyrightText>&copy; {new Date().getFullYear()} John Doe. All Rights Reserved.</CopyrightText>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
