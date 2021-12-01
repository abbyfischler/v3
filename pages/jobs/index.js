// import React from 'react'
// import styled from '@emotion/styled'
// import {
//   Box,
//   Button,
//   Container,
//   Heading,
//   Card,
//   Link as A,
//   Text,
//   Grid
// } from 'theme-ui'
// import Head from 'next/head'
// import Meta from '@hackclub/meta'
// import ForceTheme from '/components/force-theme'
// import Nav from '../../components/nav'
// import Footer from '../../components/footer'
// import theme from '../../lib/theme'

// const Header = styled(Box)`
//   background: url('/pattern.svg');
//   > div {
//     display: grid;
//     grid-gap: 24px;
//     align-items: center;
//     @media screen and (min-width: 48em) {
//       grid-template-columns: 3fr 2fr;
//     }
//   }
// `

// const Sheet = styled(Card)`
//   position: relative;
//   overflow: hidden;
//   border-radius: 8px;
//   width: 100%;
//   color: white;
// `
// Sheet.defaultProps = {
//   sx: {
//     bg: 'rgba(255, 255, 255, 0.875)',
//     p: [3, 4],
//     color: 'black',
//     width: 1
//   }
// }

// //making a function / component BOXWIDTH BUTTON
// const JobListing = ({
//   positionName = 'unnamed',
//   positionDesc = 'this is lorem ipsum',
//   positionLink = 'testlink(hackclub.com)',
//   color,
//   color1
// }) => (
//   <Sheet
//     bg="primary"
//     color="white"
//     align="center"
//     style={{
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       boxShadow:
//         '0 4px 8px rgba(0, 0, 0, 0.0625), 0 16px 32px rgba(0, 0, 0, 0.125) !important;',
//       backgroundImage: `radial-gradient( ellipse farthest-corner at bottom right, ${color}, ${color1})`,
//       position: 'relative',
//       width: '100%',
//       color: 'white'
//     }}
//   >
//     <Heading
//       mb={1}
//       sx={{
//         fontSize: ['36px', '48px', '60px'],
//         color: 'white'
//       }}
//     >
//       {positionName}
//     </Heading>
//     <Text
//       color="snow"
//       sx={{
//         fontSize: ['24px'],
//         m: 3,
//         display: 'block',
//         textAlign: 'left'
//       }}
//     >
//       {positionDesc}
//     </Text>

//     <Button
//       as="a"
//       href={positionLink}
//       bg="snow"
//       color="primary"
//       width={['auto', '100%']}
//       sx={{
//         alignSelf: ['center', 'normal'],
//         px: [5, 2, 0],
//         py: 3
//       }}
//     >
//       Read more »
//     </Button>
//   </Sheet>
// )

// export default () => (
//   <>
//     <Meta
//       as={Head}
//       title="Jobs"
//       description="Hack Club is looking to hire please find our job listings below."
//     />
//     <ForceTheme theme="light" />
//     <Nav light />
//     <Box
//       as="main"
//       key="main"
//       sx={{
//         textAlign: 'center',
//         color: 'black'
//       }}
//     >
//       <Box
//         as="article"
//         sx={{
//           position: 'relative',
//           overflow: 'hidden',
//           py: [3, 4],
//           px: 4
//         }}
//       ></Box>
//       <Nav color="muted" />
//       <Container sx={{ py: [4, 5], px: [0, 'auto'] }}>
//         <Heading
//           as="h1"
//           sx={{
//             fontSize: ['48px', '48px', '60px']
//           }}
//         >
//           Hack Club is hiring!
//         </Heading>

//         <Heading
//           sx={{
//             fontSize: [null, null, '48px'],
//             textTransform: 'uppercase'
//           }}
//           color="primary"
//           caps
//         >
//           We want you to join our team.
//         </Heading>
//         <Box
//           sx={{
//             maxWidth: '64rem',
//             mx: 'auto',
//             py: 3,
//             px: [0, 3]
//           }}
//           align="left"
//         >
//           <Grid
//             sx={{
//               maxWidth: '64rem',
//               mx: [0, 'auto']
//             }}
//             align="left"
//             columns={['1fr', null, null, '1fr 1fr']}
//           >
//             <JobListing
//               positionName="Executive Assistant"
//               positionDesc="Someone to play a role in supporting the leadership in administrative management of day-to-day operations."
//               positionLink="https://hackclub.com/jobs/executive-assistant/"
//               color={theme.util.cx('blue')}
//               color1={theme.util.cx('green')}
//             ></JobListing>
//             <JobListing
//               positionName="Events Designer"
//               positionDesc="We're looking for someone fun, creative, and technical to excite and grow the community."
//               positionLink="https://hackclub.com/jobs/events-designer/"
//               color="#516395"
//               color1="#614385"
//             ></JobListing>
//             <JobListing
//               positionName="Philanthropy Position"
//               positionDesc="We are looking for a highly-experienced senior executive, who has advised donors, and who has proven success in stewarding collaborations and closing major gifts."
//               positionLink="https://hackclub.com/jobs/philanthropy-position/"
//               color={theme.util.cx('yellow')}
//               color1={theme.util.cx('pink')}
//             ></JobListing>
//             <JobListing
//               positionName="Education Engineer"
//               positionDesc="We are looking for an engineer & educator to create and lead on technical projects for Hack Clubbers, with a strong focus on young women and non-binary individuals at Hack&nbsp;Club."
//               positionLink="https://hackclub.com/jobs/education-engineer/"
//               color="#ffafbd"
//               color1="#ffc3a0"
//             ></JobListing>
//             <JobListing
//               positionName="Bank Tech Lead"
//               positionDesc="Hack Club Bank is our in-house financial software used by 1,500 Hack Clubbers to financially power their Hack Clubs, hackathons, and student-organized nonprofits."
//               positionLink="https://hackclub.com/jobs/bank-tech-lead/"
//               color={theme.util.cx('purple')}
//               color1={theme.util.cx('red')}
//             ></JobListing>
//             <JobListing
//               positionName="Communications Manager"
//               positionDesc={
//                 <>
//                   Your main goal will be to make sure every teenager who{' '}
//                   <em>would</em> want to know about Hack Club knows about Hack
//                   Club, and create comms that meet teens where they're at.
//                 </>
//               }
//               positionLink="https://hackclub.com/jobs/communications-manager/"
//               color="#FC5C7D"
//               color1="#6A82FB"
//             ></JobListing>
//           </Grid>
//         </Box>
//       </Container>
//     </Box>

//     <Footer key="footer" />
//   </>
// )

import React from 'react'
import styled from '@emotion/styled'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Card,
  Link as A,
  Text,
  Avatar,
  Grid
} from 'theme-ui'
import Head from 'next/head'
import Meta from '@hackclub/meta'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import ForceTheme from '../../components/force-theme'

const Header = styled(Box)`
  background: url('/pattern.svg');
  > div {
    display: grid;
    grid-gap: 24px;
    align-items: center;
    @media screen and (min-width: 48em) {
      grid-template-columns: 3fr 2fr;
    }
  }
`

const Sheet = styled(Card)`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  width: 100%;
  color: white;
`
Sheet.defaultProps = {
  sx: {
    bg: 'rgba(255, 255, 255, 0.875)',
    p: [3, 4],
    color: 'black',
    width: 1,
    mb: 4
  }
}

//making a function / component BOXWIDTH BUTTON
const JobListing = ({
  positionName = 'unnamed',
  positionDesc = 'this is lorem ipsum',
  positionLink = 'testlink(hackclub.com)',
  color,
  color1
}) => (
  <Card
    color="white"
    align="center"
    variant="interactive"
    style={{
      position: 'relative',
      width: '100%',
      color: 'white',
      textAlign: 'center'
    }}
  >
    <Container
       sx={{
        backgroundImage: theme => theme.util.gx(`${color}`, `${color1}`),
        position: 'absolute',
        top: 0,
        left: 0,
        height: 15,
      }}
    >
    </Container>
    <Heading mb={1} fontSize={5} sx={{ color: 'text', fontSize: '36px' }}>
      {positionName}
    </Heading>
    <Text fontSize={1} sx={{ mb: 2, display: 'block', color: 'text' }}>
      {positionDesc}
    </Text>
    <Button
      as="a"
      href={positionLink}
      width={1}
      mt={2}
      sx={{ width: 'fit-content', backgroundImage: theme => theme.util.gx(`${color}`, `${color1}`), color: 'white', py: 2, px: 4 }}
    >
      Apply now
    </Button>
  </Card>
)

export default () => (
  <>
    <Meta
      as={Head}
      title="Jobs"
      description="Hack Club is looking to hire please find our job listings below."
    />
    <Box as="main" key="main" sx={{ textAlign: 'center', color: 'black', mb: 4}}>
    <ForceTheme theme="light" />
      <Box
        as="article"
        sx={{ position: 'relative', overflow: 'hidden', py: [3, 4], px: 4 }}
      ></Box>
      <Nav color="muted" />
      <Box
        as="section"
        sx={{
          pt: [3, 4],
          pb: [3, 4],
          mb: [2, 2]
        }}
      >
        <Container sx={{ textAlign: 'center', color: 'text' }}>
          <Heading as="h2" variant="title" sx={{ mb: 1 }}>
            Hack Club is hiring
            {/* <Text
              as="span"
              sx={{
                borderRadius: 'default',
                px: 2,
                mx: [-2, 0],
                whiteSpace: 'nowrap',
                color: 'white',
                bg: 'red'
              }}
            >
              hiring
            </Text> */}
            .
          </Heading>
          <Text variant="headline">We want you to join us</Text>
          {/* <ColorSwitcher
            sx={{ position: 'absolute', zIndex: '100', top: '5', right: '3' }}
          /> */}
        </Container>
      </Box>
      <Grid
        gap={4}
        columns={['1fr', '1fr', '1fr 1fr']}
        sx={{ maxWidth: '72rem', mx: 'auto', mb: 3, px: 4}}
      >
        <Grid gap={4} columns={[1, '1fr']}>
          {/*Change so gradient colors*/}
          <JobListing
            positionName="Executive Assistant"
            positionDesc="The leadership is looking for an executive assistant to play a vital role in supporting the leadership in administrative management of day-to-day operations."
            positionLink="https://hackclub.com/jobs/executive-assistant/"
            color="blue"
            color1="green"
          />
          <JobListing
            positionName="Events Designer"
            positionDesc="We're looking for someone fun, creative, and technical to excite and grow the community."
            positionLink="https://hackclub.com/jobs/events-designer/"
            color="#516395"
            color1="#614385"
          />
          <JobListing
            positionName="Tech Lead for Hack Club Bank"
            positionDesc="Hack Club is hiring a Tech Lead for Hack Club Bank, our in-house financial software used by 1,500 Hack Clubbers to financially power their Hack Clubs, hackathons, and student-organized nonprofits."
            positionLink="https://hackclub.com/jobs/bank-tech-lead/"
            color="purple"
            color1="red"
          ></JobListing>
        </Grid>
        <Grid gap={4} columns={[1, '1fr']}>
          {/*Change so gradient colors*/}
          <JobListing
            positionName="Education Engineer"
            positionDesc="We are looking for an engineer/educator to create and lead on technical projects for Hack Clubbers, with a strong focus on young women and non-binary individuals at Hack Club."
            positionLink="https://hackclub.com/jobs/education-engineer/"
            color="#ffafbd"
            color1="#ffc3a0"
          ></JobListing>
          <JobListing
            positionName="Philanthropy Position"
            positionDesc="We are looking for a highly-experienced senior executive, who has advised donors, and who has proven success in stewarding collaborations and closing major gifts."
            positionLink="https://hackclub.com/jobs/philanthropy-position/"
            color="yellow"
            color1="pink"
          ></JobListing>
          <JobListing
            positionName="Communications Manager"
            positionDesc="We are looking for a lead to focus on communications.This person's main goal will be to make sure every teenager who would want to know about Hack Club knows about Hack Club, and create comms that meet teens where they're at."
            positionLink="https://hackclub.com/jobs/communications-manager/"
            color="#FC5C7D"
            color1="#6A82FB"
          ></JobListing>
        </Grid>
      </Grid>
    </Box>

    <Footer key="footer" />
  </>
)