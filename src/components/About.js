// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
  padding: 50px 20px;
  max-width: 900px;
  margin: 0 auto;
  background-color: #f9f9f9;
  color: #333;
  line-height: 1.6;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
  color: #2196f3;
`;

const AboutParagraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  text-align: justify;
  text-indent: 30px;
  color: #555;
`;

const About = () => {
  return (
    <AboutWrapper>
      <AboutTitle>About Me</AboutTitle>
      
      <AboutParagraph>
        I am a passionate Fullstack Developer with a diverse skill set spanning Machine Learning (ML), MLOps, Data Science, and DevOps. My primary focus is on building responsive and scalable web applications that seamlessly integrate the frontend and backend. With expertise in Django, React, MongoDB, PostgreSQL, and more, I enjoy creating high-performance applications that deliver outstanding user experiences.
      </AboutParagraph>

      <AboutParagraph>
        I have significant experience in Machine Learning, applying real-world models to solve problems in areas such as regression and time-series forecasting. I'm proficient in using Scikit-learn and PyTorch for data preprocessing, feature engineering, and model evaluation. Whether it’s optimizing predictive models or analyzing large datasets, I leverage the latest tools and techniques to ensure accuracy and efficiency.
      </AboutParagraph>

      <AboutParagraph>
        In addition to my ML skills, I am hands-on with deploying and maintaining machine learning models in production using tools like Docker, Kubernetes, and CI/CD pipelines. My work in MLOps ensures that ML models are not only robust but also scalable and maintainable in dynamic environments.
      </AboutParagraph>

      <AboutParagraph>
        My expertise extends to building ETL pipelines with tools like Apache Airflow and Apache Kafka, enabling seamless data flow for real-time and batch processing. I’ve also managed Kubernetes and PostgreSQL clusters, ensuring smooth operations and efficient resource management for my teams.
      </AboutParagraph>

      <AboutParagraph>
        As someone with strong DevOps experience, I have worked with tools like Jenkins, CloudBees, Ansible, and Terraform to automate infrastructure and deployment processes. I am passionate about driving continuous integration and delivery, ensuring faster, more reliable product releases.
      </AboutParagraph>

      <AboutParagraph>
        Ultimately, I am dedicated to building end-to-end solutions that combine the best of software engineering, data science, and infrastructure management, allowing organizations to leverage technology effectively and innovate rapidly.
      </AboutParagraph>
    </AboutWrapper>
  );
};

export default About;
