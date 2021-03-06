// react
import * as React from 'react';
// @mui
import { Box, BoxProps, Grid, styled, Typography } from '@mui/material';
// custom component
import ContactForm from 'components/common/ContactForm';
import MainLayout from 'components/layout/MainLayout';
import Home from '@material-ui/icons/Home';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import WatchLaterTwoToneIcon from '@mui/icons-material/WatchLaterTwoTone';


// custom context
import ConstantsContext from 'context/constantsContext';
// type
import type { NextPage } from 'next';
import ContainerGrid from 'components/common/ContainerGrid';

const CustomBox = styled(Box)<BoxProps>(({ theme }) => ({
  margin: '30% 1rem 5% 1rem',
  [theme.breakpoints.up(350)]: {
    margin: '20% 1rem 5% 1rem',
  },
  [theme.breakpoints.up('sm')]: {
    margin: '15% 2rem 5% 2rem',
  },
  [theme.breakpoints.up('md')]: {
    margin: '10% 2rem 5% 2rem',
  },
}));

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const card = (
  <React.Fragment>
    <CardContent >
      <Typography sx={{ fontSize: 14 }} gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

const HireMe: NextPage = (props) => {
  const { pages } = React.useContext(ConstantsContext);

  return (
    <MainLayout pageData={pages && pages.hireMe}>
      <CustomBox>
        <ContainerGrid>
          <Grid
            item
            xs={12}
            md={6}
            alignItems="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Box
              sx={{
                width: {
                  xs: '100%',
                  md: '70%',
                },
              }}
            >
              <Stack direction="column" alignItems="center" spacing={2}>
                <Typography component="h2" variant="h4">
                Get In Touch </Typography>
              </Stack>
              <Divider variant="middle" />
              <Stack direction="column" alignItems="left" spacing={2}>
                <Button variant="contained" href="#"> +91 9833162868 <PhoneIcon></PhoneIcon>
                </Button>
                <Button variant="contained" href="https://www.linkedin.com/in/thatsushmit/">
                  Connect me on  <LinkedInIcon></LinkedInIcon>
                </Button>
                <Button variant="contained" href="#">sushmityadav007@gmail.com
                <EmailIcon></EmailIcon>
                </Button>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <ContactForm />
          </Grid>
        </ContainerGrid>
      </CustomBox>
    </MainLayout>
  );
};

export default HireMe;
