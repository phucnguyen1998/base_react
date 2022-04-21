import { useEffect, useState } from 'react'
import './App.css';
import { shallowEqual, useSelector } from 'react-redux'
import Loader from './components/common/Loader'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import Routes from './routes';

const MainLayout = ({ children }) => {
  const { restoring } = useSelector((state) => state.layout, shallowEqual)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading !== restoring) {
      setLoading(restoring)
    }
  }, [loading, restoring])

  if (loading) {
    return <Loader includedLogo />
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

function App() {

  return (
    <MainLayout>
      <Routes />
    </MainLayout>
  );
}

export default App;
