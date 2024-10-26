import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import background from '../../assets/backgrounds/ourCoffee.png';
import coffeeGirl from '../../assets/Coffee/CoffeGirl.jpg';
import AppHeader from '../../components/AppHeader/';
import AppProductsInfo from '../../components/AppProductsInfo/';
import AppSearch from '../../components/AppSearch/';
import CoffeeList from '../../components/CoffeeList/';
import { ourCoffeDesripiton } from '../../constants';
import { filterContext, searchContext } from '../../context';

const OurCoffePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  return (
    <>
      <Helmet>
        <meta name="description" content="Our Coffee" />
        <title>Our Coffee</title>
      </Helmet>
      <AppHeader text={'Our coffee'} background={background} />
      <main>
        <AppProductsInfo
          description={ourCoffeDesripiton}
          title={'About our beans'}
          image={coffeeGirl}
          alt={'Aesthetic coffee'}
        />
        <searchContext.Provider value={{ searchQuery, setSearchQuery }}>
          <filterContext.Provider value={{ filter, setFilter }}>
            <AppSearch />
            <CoffeeList />
          </filterContext.Provider>
        </searchContext.Provider>
      </main>
    </>
  );
};

export default OurCoffePage;
