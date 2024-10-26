import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import background from '../../assets/backgrounds/forYourPleasureBg.png';
import cupOfCoffee from '../../assets/Coffee/ourPleasureImg.png';
import AppHeader from '../../components/AppHeader/';
import AppProductsInfo from '../../components/AppProductsInfo/';
import CoffeeList from '../../components/CoffeeList';
import { forYourPleasureDescriotion } from '../../constants';
import { filterContext, searchContext } from '../../context';

const ForYourPleasurePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  return (
    <>
      <Helmet>
        <meta name="description" content="For your pleasure page" />
        <title>For your pleasure</title>
      </Helmet>
      <AppHeader text={'For your pleasure'} background={background} />
      <main>
        <AppProductsInfo
          title={'About our goods'}
          description={forYourPleasureDescriotion}
          image={cupOfCoffee}
          alt={'Cup of Coffee'}
        />
        <searchContext.Provider value={{ searchQuery, setSearchQuery }}>
          <filterContext.Provider value={{ filter, setFilter }}>
            <CoffeeList />
          </filterContext.Provider>
        </searchContext.Provider>
      </main>
    </>
  );
};

export default ForYourPleasurePage;
