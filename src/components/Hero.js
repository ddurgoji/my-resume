// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const HeroWrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
  color: #333;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 30px;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  letter-spacing: 2px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.h2`
  font-size: 1.6rem;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.5;

  /* Add a bit of space between the subtitle and the list */
  & + ul {
    margin-top: 20px;
    text-align: left;
    margin-left: 20px;
  }
`;

const SubList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  font-size: 1.2rem;
  color: #444;

  li {
    margin-bottom: 10px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SocialLink = styled.a`
  font-size: 2rem;
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: #2196f3;  /* Highlight color on hover */
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroContent>
          <HeroTitle>Site Under construction - Dhiraj Durgoji</HeroTitle>
          <HeroSubtitle>
            Software Engineer Principal lead at Akamai Technologies.
          </HeroSubtitle>
          <HeroSubtitle>
            Fullstack developer with Machine learning, MLOps, Data science and Devops experience!
          </HeroSubtitle>
          {/* Add Sub-Bullets */}
          <HeroSubtitle>My Key Areas of Focus:</HeroSubtitle>
          <SubList>
            <li>Responsive, scalable web applications using Django, React, MongoDB, Postgres etc.</li>
            <li>Proficient in Machine learning real-world applications including regression and time-series forecasting.</li>
            <li>Extensive experience in data pre-processing, feature engineering and model evaluation using scikit-learn, PyTorch.</li>
            <li>Hands-on experience deploying and maintaining ML models using Docker, Kubernets and CI/CD pipelines.</li>
            <li>Skilled in building ETL pipelines using tools like Apache airflow and Apache Kafka</li>
            <li>Experience managing the kubernetes and postgres clusters for my team</li>
            <li>DevOps experience with tools like Jenkins, Cloudbees, Ansible, Terraform etc.</li>
          </SubList>

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
        </HeroContent>
      </motion.div>
    </HeroWrapper>
  );
};

export default Hero;
