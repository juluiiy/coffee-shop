import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import AppBanner from '../../components/AppBanner/';
import AppBestProducts from '../../components/AppBestProducts/';
import AppInfo from '../../components/AppInfo/';

const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);

  return (
    <>
      <Helmet>
        <meta name="description" content="Coffee house" />
        <title>Coffee house</title>
      </Helmet>

      <AppBanner />

      <main>
        <AppInfo />
        <AppBestProducts />
      </main>
    </>
  );
};

export default MainPage;
