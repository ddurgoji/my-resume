// src/components/Experience.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ExperienceWrapper = styled.section`
  padding: 60px 20px;
  background-color: #fafafa;
`;

const ExperienceTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333;
`;

const ExperienceList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ExperienceCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.15);
  }
`;

const JobTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 10px;
  color: #2196f3;
`;

const JobDescription = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const Experience = () => (
  <ExperienceWrapper>
    <ExperienceTitle>Experience</ExperienceTitle>
    <ExperienceList>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ExperienceCard>
          <JobTitle>Software Engineer Principal Lead at Akamai Technologies</JobTitle>
          <JobDescription>
            Focused on frontend development, primarily using React.js, Redux, and
            TypeScript. Led multiple projects and collaborated with cross-functional
            teams to deliver high-quality products.
          </JobDescription>
        </ExperienceCard>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <ExperienceCard>
          <JobTitle>Software Engineer at Motorola India pvt. limited.</JobTitle>
          <JobDescription>
            Developed user interfaces for web applications, with a strong focus on
            UI/UX best practices and responsive design principles.
          </JobDescription>
        </ExperienceCard>
      </motion.div>
    </ExperienceList>
  </ExperienceWrapper>
);

export default Experience;
