// react
import * as React from 'react';
// @mui
import {
  Container,
  ContainerProps,
  Grid,
  GridProps,
  Typography,
  styled,
} from '@mui/material';
// custom component
import ContainerGrid from 'components/common/ContainerGrid';
import SkillProgress from 'components/common/SkillProgress';
// custom icons
import IllustratorCCIcon from 'components/icon/IllustratorCC';
import LightroomCCIcon from 'components/icon/LightroomCC';
import PhotoshopIcon from 'components/icon/Photoshop';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
// context
import ComponentsContext from 'context/componentsContext';
// type
interface SkillsProps {}

const CustomContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  marginBottom: '5rem',
  marginTop: '5rem',
  scrollMarginTop: '2rem',
}));

const CustomGridItem = styled(Grid)<GridProps>(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '2rem',
}));

const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  const { containerMaxWidth } = React.useContext(ComponentsContext);

  const skills = [
    {
      Icon: (
        <PhotoshopIcon bgColor="white" textColor="tomato" fontSize="large" />
      ),
      title: 'Java Script',
      progressValue: 78,
    },
    {
      Icon: (
        <LightroomCCIcon bgColor="white" textColor="tomato" fontSize="large" />
      ),
      title: 'Type Script',
      progressValue: 83,
    },
    {
      Icon: (
        <IllustratorCCIcon
          bgColor="white"
          textColor="tomato"
          fontSize="large"
        />
      ),
      title: 'Angular',
      progressValue: 97,
    },
    {
      Icon: (
        <IllustratorCCIcon
          bgColor="white"
          textColor="tomato"
          fontSize="large"
        />
      ),
      title: 'Git',
      progressValue: 50,
    },
    {
      Icon: (
        <IllustratorCCIcon
          bgColor="white"
          textColor="tomato"
          fontSize="large"
        />
      ),
      title: 'CSS/SASS',
      progressValue: 50,
    },
    {
      Icon: (
        <IllustratorCCIcon
          bgColor="white"
          textColor="tomato"
          fontSize="large"
        />
      ),
      title: 'Test Cafe',
      progressValue: 50,
    },
  ];

  return (
    <>
      <CustomContainer id="skills" maxWidth={containerMaxWidth}>
        <Typography component="h2" variant="h4" textAlign="center">
          My Skills
        </Typography>
        <ContainerGrid marginTop="2rem">
          {skills.map((skill, index) => (
            <CustomGridItem
              item
              key={`${skill.title} - ${skill.progressValue} - ${index}`}
              xs={12}
              sm={6}
              md={4}
            >
              <SkillProgress
                size={100}
                value={skill.progressValue}
                Icon={skill.Icon}
                title={`${skill.title}`}
                subtitle={`${skill.title} | ${skill.progressValue}%`}
              />
            </CustomGridItem>
          ))}
        </ContainerGrid>
      </CustomContainer>
    </>
  );
};

export default Skills;
