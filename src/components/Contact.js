// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.section`
  padding: 60px 20px;
  background-color: #fafafa;
`;

const ContactTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #333;
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1.1rem;
  outline: none;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: #2196f3;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1.1rem;
  outline: none;
  height: 150px;
  
  &:focus {
    border-color: #2196f3;
  }
`;

const SubmitButton = styled.button`
  padding: 15px 30px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #1976d2;
  }
`;

const Contact = () => (
  <ContactWrapper>
    <ContactTitle>Contact</ContactTitle>
    <ContactForm>
      <Input type="text" placeholder="Your Name" />
      <Input type="email" placeholder="Your Email" />
      <Textarea placeholder="Your Message" />
      <SubmitButton type="submit">Send Message</SubmitButton>
    </ContactForm>
  </ContactWrapper>
);

export default Contact;
