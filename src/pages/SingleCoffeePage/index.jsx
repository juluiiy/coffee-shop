import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import coffee from '../../assets//Coffee/coffee.jpg';
import background from '../../assets/backgrounds/ourCoffee.png';
import AppHeader from '../../components/AppHeader';
import AppProductsInfo from '../../components/AppProductsInfo';
import { postItems } from '../../constants';

const SingleCoffeePage = () => {
  const { coffeId } = useParams();
  const { description, price, country, title } = postItems.find((item) => item.id === coffeId);

  return (
    <>
      <Helmet>
        <meta name="description" content={`${title} page`} />
        <title>{title}</title>
      </Helmet>
      <AppHeader background={background} text={'Our Coffee'} />
      <AppProductsInfo title={'About it'} image={coffee} description={description} price={price} country={country} />
    </>
  );
};

export default SingleCoffeePage;
