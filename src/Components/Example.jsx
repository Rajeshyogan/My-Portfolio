import React from 'react';
import { Typography, List, ListItem, ListItemText, LinearProgress } from '@mui/material';
import { styled } from '@mui/system';

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const SkillsSection = () => {
  const skills = [
    { name: 'JavaScript', proficiency: 90 },
    { name: 'React', proficiency: 85 },
    { name: 'HTML', proficiency: 95 },
    { name: 'CSS', proficiency: 85 },
    // Add more skills as needed
  ];

  return (
    <div>
      <Typography variant="h4" sx={{ marginBottom: 2 }} gutterBottom>
        Skills
      </Typography>
      <List>
        {skills.map((skill, index) => (
          <StyledListItem key={index}>
            <ListItemText primary={skill.name} />
            <LinearProgress variant="determinate" value={skill.proficiency} />
          </StyledListItem>
        ))}
      </List>
    </div>
  );
};

export default SkillsSection;
