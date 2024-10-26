import { Link } from 'react-router-dom';

import { postItems } from '../../constants';
import {
  BestCardFolder,
  BestCardItem,
  BestTitle,
  CardItemPrice,
  CardItemThumbnail,
  CardItemTitle,
  SectionBest,
  WrapperBest,
} from '../styles/';

const bestPosts = postItems.slice(0, 3).map(({ title, price, img, id }) => {
  return (
    <Link to={`/${id}`} key={id}>
      <BestCardItem>
        <CardItemThumbnail src={img} alt={title} />
        <CardItemTitle>{title}</CardItemTitle>
        <CardItemPrice>{price}</CardItemPrice>
      </BestCardItem>
    </Link>
  );
});

const AppBest = () => {
  return (
    <SectionBest>
      <WrapperBest>
        <BestTitle>Our best</BestTitle>
        <BestCardFolder>{bestPosts}</BestCardFolder>
      </WrapperBest>
    </SectionBest>
  );
};

export default AppBest;
