import { KeyboardArrowDown, KeyboardArrowUp, Search, Notifications, AccountCircleOutlined } from '@mui/icons-material'
import { AppBar, Button, IconButton, Menu, MenuItem, styled as MUIStyled, Toolbar } from '@mui/material'
import { languagesResources } from '../../constants/common'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { authActions } from './../../store/slices/authSlice'
import Container from './Container'
// import Logo from './Logo'
import logo from '../../logo.svg'
import {
  Link
} from 'react-router-dom'

const unsignedInMenu = [
  {
    label: 'main_menu.home',
    url: '/',
  },
  {
    label: 'main_menu.services',
    url: '/services',
  },
  {
    label: 'main_menu.about_us',
    url: '/about',
  },
  {
    label: 'main_menu.contact',
    url: '/contact',
  },

  {
    label: () => <Search />,
    url: '/search',
  },
]

const userMenuItems = [
  {
    label: 'user_menu.my_profile',
    url: '/profile',
  },
  {
    label: 'user_menu.logout',
    onClick: (dispatch) => {
      dispatch(authActions.logout())
    },
  },
]

const Header = MUIStyled((props) => {
  const { user } = useSelector((state) => state.auth, shallowEqual)
  const { t, i18n } = useTranslation()
  const menu = unsignedInMenu
  const currentLang = 'en'
  const dispatch = useDispatch()

  const [languageMenuAnchor, setLanguageAnchor] = useState(null)
  const [userMenuAnchor, setUserMenuAnchor] = useState(null)

  const handleLanguageMenuClick = (event) => {
    let anchor = event.target
    if (anchor.tagName !== 'button') {
      anchor = event.target.parentNode
    }
    setLanguageAnchor(anchor)
  }

  const handleLanguageMenuClose = () => {
    setLanguageAnchor(null)
  }

  const handleLanguageSelect = (lang) => (event) => {
    i18n.changeLanguage(lang)

    handleLanguageMenuClose()
  }

  const handleUserAvatarClick = (event) => {
    setUserMenuAnchor(event.target)
  }

  const handleUserMenuClose = () => {
    setUserMenuAnchor(null)
  }

  const handleUserMenuItemClick = (item) => () => {
    setUserMenuAnchor(null)
    if (typeof item?.onClick === 'function') item.onClick(dispatch)
  }

  return (
    <AppBar {...props} elevation={0}>
      <Container>
        <Toolbar>
          <Link to={'/'}>
            <Button>
              {/* <Logo height={36} /> */}
              <img src={logo} className="App-logo" alt="logo" />

            </Button>
          </Link>
          <div className="right-header">
            <div className="main-menu">
              {menu.map((item, index) => (
                <Button href={item.url} key={`main-menu-${index}`}>
                  {typeof item.label === 'function' ? item.label() : t(item.label)}
                </Button>
              ))}
            </div>
            <div className="languages-menu">
              <Button onClick={handleLanguageMenuClick}>
                <span>{t(`language.${currentLang}`)}</span>
                {Boolean(languageMenuAnchor) ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              </Button>
              <Menu
                anchorEl={languageMenuAnchor}
                open={Boolean(languageMenuAnchor)}
                onClose={handleLanguageMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                PaperProps={{
                  sx: {
                    mt: 2,
                  },
                }}
              >
                {Object.keys(languagesResources).map((lang) => (
                  <MenuItem key={`language-menu-item-${lang}`} onClick={handleLanguageSelect(lang)}>
                    {t(`language.${lang}`)}
                  </MenuItem>
                ))}
              </Menu>
            </div>
            <div className="user-info">
              {user ? (
                <>
                  <IconButton>
                    <Notifications />
                  </IconButton>
                  <IconButton onClick={handleUserAvatarClick}>
                    <AccountCircleOutlined fontSize="large" />
                  </IconButton>
                  <Menu
                    anchorEl={userMenuAnchor}
                    open={Boolean(userMenuAnchor)}
                    onClose={handleUserMenuClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    PaperProps={{
                      sx: {
                        mt: 2,
                      },
                    }}
                  >
                    {userMenuItems.map((item) => (
                      <MenuItem
                        key={`user-menu-item-${item.label}`}
                        onClick={handleUserMenuItemClick(item)}
                        href={item.url}
                      >
                        {t(item.label)}
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              ) : (
                <Link to={'/login'}>
                  <Button color="primary" variant="contained" className="login-btn">
                    {t('main_menu.login_button')}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
})(({ theme }) => ({
  backgroundColor: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',

  '& .MuiToolbar-root': {
    justifyContent: 'space-between',
  },

  '& .right-header': {
    display: 'flex',
    columnGap: 18,

    '& a, button': {
      textTransform: 'none',
    },

    '& .languages-menu': {
      marginLeft: 46,
    },

    '& .user-info': {
      display: 'flex',
      alignItems: 'center',
      columnGap: 20,

      '& .MuiIconButton-root': {
        padding: 0,
      },

      '& .login-btn': {
        borderRadius: 30,
      },
    },
  },
}))

export default Header
