import { IconButton, styled as MUIStyled } from '@mui/material'
import dayjs from 'dayjs'
import { t } from 'i18next'
import Container from './Container'
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from './Icons'
// import Logo from './Logo'
import logo from '../../logo.svg';

const socialConfigs = [
  {
    icon: <FacebookIcon />,
    url: process.env.REACT_APP_FACEBOOK_URL || '#/',
  },
  {
    icon: <TwitterIcon />,
    url: process.env.REACT_APP_TWITTER_URL || '#/',
  },
  {
    icon: <InstagramIcon />,
    url: process.env.REACT_APP_INSTAGRAM_URL || '#/',
  },
  {
    icon: <LinkedInIcon />,
    url: process.env.REACT_APP_LINKEDIN_URL || '#/',
  },
]

const Footer = MUIStyled((props) => {
  return (
    <div {...props}>
      <Container {...props}>
        {/* <Logo height={54} color="#fff" /> */}
        <img src={logo} className="App-logo" alt="logo" />
        <div className="copy-right">&copy;{t('footer.copyright', { year: dayjs(new Date()).format('YYYY') })}</div>
        <div className="social-links">
          {socialConfigs.map((item, index) => (
            <a href={item.url} key={`social-link-${index}`}>
              <IconButton>{item.icon}</IconButton>
            </a>
          ))}
        </div>
      </Container>
    </div>
  )
})({
  backgroundColor: '#090B31',
  width: '100%',
  bottom: 0,
  left: 0,
  right: 0,
  height: 152,

  '& .MuiContainer-root': {
    display: 'flex',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '48px 164px',
  },

  '& .copy-right': {
    fontSize: '14px',
    lineHeight: '18px',
    maxWidth: 328,
    textAlign: 'center',
  },
})

export default Footer
