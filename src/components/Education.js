// src/components/Education.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const EducationWrapper = styled.section`
  padding: 80px 20px;
  background-color: #fafafa;
`;

const EducationTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #333;
`;

const EducationList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const EducationCard = styled.div`
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

const DegreeTitle = styled.h3`
  font-size: 1.8rem;
  color: #2196f3;
  margin-bottom: 10px;
`;

const InstitutionName = styled.p`
  font-size: 1.4rem;
  color: #555;
  margin-bottom: 10px;
`;

const GraduationDate = styled.p`
  font-size: 1.2rem;
  color: #777;
`;

const Education = () => {
  return (
    <EducationWrapper>
      <EducationTitle>Education</EducationTitle>
      <EducationList>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <EducationCard>
            <DegreeTitle>Master of Science in Computer Science</DegreeTitle>
            <InstitutionName>University of ABC</InstitutionName>
            <GraduationDate>Graduated: May 2021</GraduationDate>
          </EducationCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <EducationCard>
            <DegreeTitle>Bachelor of Science in Information Technology</DegreeTitle>
            <InstitutionName>XYZ College</InstitutionName>
            <GraduationDate>Graduated: May 2018</GraduationDate>
          </EducationCard>
        </motion.div>
        
        {/* Add more education entries as needed */}
      </EducationList>
    </EducationWrapper>
  );
};

export default Education;
