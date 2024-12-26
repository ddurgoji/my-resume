// src/components/Skills.js
import React from 'react';
import styled from 'styled-components';
import { FaReact, FaPython, FaAws, FaDocker, FaGit, FaJenkins } from 'react-icons/fa';
import { DiDjango } from "react-icons/di";
import { LiaLinode } from "react-icons/lia";
import { SiKubernetes, SiPerforce, SiMongodb, SiCloudbees, SiAnsible, SiTerraform, SiBootstrap, SiScikitlearn, SiOllama } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";


const SkillsWrapper = styled.section`
  padding: 50px 20px;
  background-color: #f9f9f9;
  color: #333;
`;

const SkillsTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #2196f3;
  margin-bottom: 40px;
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px; /* Space between cards */
`;

const SkillCard = styled.div`
  flex: 1 1 calc(33% - 20px); /* 3 cards per row with some gap */
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  /* Hover effect */
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  /* Responsiveness for smaller screens */
  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 20px); /* 2 cards per row on medium screens */
  }

  @media (max-width: 480px) {
    flex: 1 1 100%; /* 1 card per row on small screens */
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  color: #2196f3;
  margin-bottom: 15px;
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const SkillFillWrapper = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 10px;
  height: 10px;
`;

const SkillFill = styled.div`
  height: 100%;
  width: ${({ fillPercentage }) => fillPercentage || '0%'};
  background-color: #2196f3;
  border-radius: 10px;
`;

const Skills = () => {
  return (
    <SkillsWrapper>
      <SkillsTitle>My Skills</SkillsTitle>
      <SkillsGrid>
        <SkillCard>
          <SkillIcon><FaPython /></SkillIcon>
          <SkillTitle>Python</SkillTitle>
          <SkillFillWrapper>
            <SkillFill fillPercentage="80%" />
          </SkillFillWrapper>
        </SkillCard>

        <SkillCard>
          <SkillIcon><DiDjango /></SkillIcon>
          <SkillTitle>Django</SkillTitle>
          <SkillFillWrapper>
            <SkillFill fillPercentage="80%" />
          </SkillFillWrapper>
        </SkillCard>

        <SkillCard>
          <SkillIcon><SiBootstrap /></SkillIcon>
          <SkillTitle>Bootstrap</SkillTitle>
          <SkillFillWrapper>
            <SkillFill fillPercentage="90%" />
          </SkillFillWrapper>
        </SkillCard>

        <SkillCard>
          <SkillIcon><FaReact /></SkillIcon>
          <SkillTitle>React</SkillTitle>
          <SkillFillWrapper>
            <SkillFill fillPercentage="90%" />
          </SkillFillWrapper>
        </SkillCard>

        <SkillCard>
          <SkillIcon><SiScikitlearn /></SkillIcon>
          <SkillTitle>Scikit-learn</SkillTitle>
          <SkillFillWrapper>
            <SkillFill fillPercentage="90%" />
          </SkillFillWrapper>
        </SkillCard>

        <SkillCard>
          <SkillIcon><SiOllama /></SkillIcon>
          <SkillTitle>Ollama</SkillTitle>
          <SkillFillWrapper>
            <SkillFill fillPercentage="90%" />
          </SkillFillWrapper>
        </SkillCard>

        <SkillCard>
          <SkillIcon><FaDocker /></SkillIcon>
          <SkillTitle>Docker</SkillTitle>
          <SkillFillWrapper>
            <SkillFill fillPercentage="70%" />
          </SkillFillWrapper>
        </SkillCard>

        <SkillCard>
          <SkillIcon><SiKubernetes /></SkillIcon>
          <SkillTitle>Kubernetes</SkillTitle>
          <SkillFillWrapper>
            <SkillFill fillPercentage="70%" />
          </SkillFillWrapper>
        </SkillCard>

        <SkillCard>
          <SkillIcon><FaAws /></SkillIcon>
          <SkillTitle>AWS</SkillTitle>
          <SkillFillWrapper>
            <SkillFill fillPercentage="75%" />
          </SkillFillWrapper>
        </SkillCard>

        <SkillCard>
          <SkillIcon><LiaLinode /></SkillIcon>
          <SkillTitle>Linode</SkillTitle>
          <SkillFillWrapper>
            <SkillFill fillPercentage="75%" />
          </SkillFillWrapper>
        </SkillCard>

        <SkillCard>
          <SkillIcon><BiLogoPostgresql /></SkillIcon>
          <SkillTitle>Postgres</SkillTitle>
          <SkillFillWrapper>
            <SkillFill fillPercentage="85%" />
          </SkillFillWrapper>
        </SkillCard>

        <SkillCard>
          <SkillIcon><SiMongodb /></SkillIcon>
          <SkillTitle>MongoDB</SkillTitle>
          <SkillFillWrapper>
            <SkillFill fillPercentage="85%" />
          </SkillFillWrapper>
        </SkillCard>

        <SkillCard>
          <SkillIcon><FaJenkins /></SkillIcon>
          <SkillTitle>Jenkins</SkillTitle>
          <SkillFillWrapper>
            <SkillFill fillPercentage="85%" />
          </SkillFillWrapper>
        </SkillCard>

        <SkillCard>
          <SkillIcon><SiCloudbees /></SkillIcon>
          <SkillTitle>CloudBees</SkillTitle>
          <SkillFillWrapper>
            <SkillFill fillPercentage="85%" />
          </SkillFillWrapper>
        </SkillCard>

        <SkillCard>
          <SkillIcon><SiAnsible /></SkillIcon>
          <SkillTitle>Ansible</SkillTitle>
          <SkillFillWrapper>
            <SkillFill fillPercentage="85%" />
          </SkillFillWrapper>
        </SkillCard>

        <SkillCard>
          <SkillIcon><SiTerraform /></SkillIcon>
          <SkillTitle>Terraform</SkillTitle>
          <SkillFillWrapper>
            <SkillFill fillPercentage="85%" />
          </SkillFillWrapper>
        </SkillCard>

        <SkillCard>
          <SkillIcon><FaGit /></SkillIcon>
          <SkillTitle>Git</SkillTitle>
          <SkillFillWrapper>
            <SkillFill fillPercentage="90%" />
          </SkillFillWrapper>
        </SkillCard>

        <SkillCard>
          <SkillIcon><SiPerforce /></SkillIcon>
          <SkillTitle>Perforce</SkillTitle>
          <SkillFillWrapper>
            <SkillFill fillPercentage="90%" />
          </SkillFillWrapper>
        </SkillCard>
      </SkillsGrid>
    </SkillsWrapper>
  );
};

export default Skills;
