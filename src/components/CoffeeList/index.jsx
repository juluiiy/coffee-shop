import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { postItems } from '../../constants';
import { filterContext, searchContext } from '../../context';
import {
  CoffeeListGrid,
  ItemContainer,
  ItemCountry,
  ItemEntryWrapper,
  ItemPrice,
  ItemTextFolder,
  ItemThumbnail,
  ItemTitle,
  NoResultsMessage,
  SectionCoffeeList,
} from '../styles';

const onFilter = (items, filter) => {
  return filter === 'all' ? items : items.filter((item) => item.country === filter);
};

const onSearch = (searchQuery, postItems) => {
  return postItems.filter((item) => {
    return item.title.toLowerCase().startsWith(searchQuery.toLowerCase());
  });
};

const CoffeeList = () => {
  const { searchQuery } = useContext(searchContext);
  const { filter } = useContext(filterContext);
  const posts = onSearch(searchQuery, postItems);
  const filteredPosts = onFilter(posts, filter);

  const renderPosts = () => (
    <CoffeeListGrid data-cy="coffee-list-grid">
      {filteredPosts.map(({ id, title, country, price, img }) => (
        <ItemContainer key={id} data-cy="coffee-list-item">
          <Link to={`/our-coffee/${id}`}>
            <ItemEntryWrapper>
              <ItemThumbnail>
                <img src={img} alt={title} data-cy="coffee-list-thumbnail" />
              </ItemThumbnail>
              <ItemTextFolder>
                <ItemTitle>{title}</ItemTitle>
                <ItemCountry>{country}</ItemCountry>
                <ItemPrice>{price}</ItemPrice>
              </ItemTextFolder>
            </ItemEntryWrapper>
          </Link>
        </ItemContainer>
      ))}
    </CoffeeListGrid>
  );

  return (
    <SectionCoffeeList data-cy="section-coffee-list">
      {filteredPosts.length > 0 ? (
        renderPosts()
      ) : (
        <NoResultsMessage data-cy="no-results-message">No results</NoResultsMessage>
      )}
    </SectionCoffeeList>
  );
};

export default CoffeeList;
