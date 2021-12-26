// react
import * as React from 'react';
// next
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';

// @mui
import {
  Box,
  BoxProps,
  Card,
  CardActions,
  CardActionsProps,
  CardProps,
  Grid,
  Skeleton,
  Typography,
  styled,
  CardContent,
  Collapse,
  useMediaQuery,
  useTheme,
} from '@mui/material';
// custom component
import FacebookIconLink from 'components/common/FacebookIconLink';
import InstagramIconLink from 'components/common/InstagramIconLink';
import TwitterIconLink from 'components/common/TwitterIconLink';
import ContainerGrid from 'components/common/ContainerGrid';
import ExpandMoreIconButton from 'components/common/ExpandMoreIconButton';
// type
interface AboutProps { }

const ImageWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '21rem',
  [theme.breakpoints.up(350)]: {
    height: '26rem',
  },
  [theme.breakpoints.up('sm')]: {
    height: '50vh',
  },
  [theme.breakpoints.up('md')]: {
    height: '100%',
  },
}));

const CustomContainer = styled(Box)<BoxProps>(({ theme }) => ({
  scrollMarginTop: '1rem',
  [theme.breakpoints.up('sm')]: {
    scrollMarginTop: '2rem',
  },
}));

const CustomCard = styled(Card)<CardProps>(({ theme }) => ({
  margin: '1rem',
  overflow: 'hidden',
  [theme.breakpoints.up('sm')]: {
    margin: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    height: 'fit-content',
  },
  [theme.breakpoints.up('lg')]: {
    height: '90vh',
  },
}));

const CustomCardActions = styled(CardActions)<CardActionsProps>(
  ({ theme }) => ({
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
    [theme.breakpoints.up('lg')]: {
      position: 'absolute',
      bottom: 0,
    },
  })
);

const About: React.FunctionComponent<AboutProps> = (props) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false);

  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'));

  React.useEffect(() => {
    if (isUpMd) setShowMore(true);
    else setShowMore(false);
  }, [isUpMd]);

  return (
    <CustomContainer id="about">
      <CustomCard>
        <ContainerGrid sx={{ marginTop: 0, height: '100%' }}>
          <Grid item xs={12} md={6} style={{ padding: 0 }}>
            <ImageWrapper>
              <Image
                alt="John Doe profile image"
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
                onLoad={() => setIsLoaded(true)}
                src="/profile.png"
              />
              {!isLoaded && (
                <Skeleton
                  variant="rectangular"
                  sx={{
                    backgroundColor: 'currentcolor',
                    height: '100%',
                    position: 'absolute',
                    width: '100%',
                  }}
                />
              )}
            </ImageWrapper>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{ padding: '2rem', position: 'relative' }}
          >
            <Card
              sx={{ boxShadow: 'none', height: '100%', position: 'relative' }}
            >
              <Typography component="h2" variant="h5" fontWeight="bold">
                A bit about me
              </Typography>
              <CardContent>
                <Typography component="p" variant="body1">
                I am a Software Engineer having more than 3 years of experience in designing,
                developing UI, testing, debugging,
                and training colleagues for web development technologies.
                </Typography>
                <Collapse
                  in={showMore}
                  sx={{
                    p: {
                      marginTop: '0.5rem',
                    },
                  }}
                  timeout="auto"
                  unmountOnExit
                >
                  <Typography component="p" variant="body1">
                  Proven Abilities in optimizing web apps and their functionalities which helps to 
                improves the data retrieval and workflow efficiencies of software products.                  </Typography>
                </Collapse>
              </CardContent>
              <CustomCardActions disableSpacing>
                {!isUpMd && (
                  <ExpandMoreIconButton
                    open={showMore}
                    onClick={() => setShowMore(!showMore)}
                    sx={{
                      justifySelf: 'flex-start',
                    }}
                  />
                )}
                <div>
                <Button href="https://www.linkedin.com/in/thatsushmit/">
                <LinkedInIcon></LinkedInIcon>
                </Button>
                <Button href="https://github.com/thatssushmit?tab=repositories">
                <GitHubIcon></GitHubIcon>
                </Button>
                </div>
              </CustomCardActions>
            </Card>
          </Grid>
        </ContainerGrid>
      </CustomCard>
    </CustomContainer>
  );
};

export default About;
