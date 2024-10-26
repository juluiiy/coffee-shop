import { useContext, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { filterProps as filterProperties } from '../../constants';
import { filterContext, searchContext } from '../../context';
import {
  FilterButton,
  FilterButtonsContainer,
  FilterContainer,
  FilterSearchContainer,
  FilterSearchWrapper,
  FiltersText,
  SearchInput,
  SearchLabel,
  SearhContainer,
} from '../styles/';

const AppSearch = () => {
  const buttonReferences = useRef([]);

  const onToggleFilter = (filter, setFilter, previousFilter_, setPreviousFilter_, index) => {
    if (previousFilter_ === filter) {
      setFilter('all');
      setPreviousFilter_('all');
      return;
    }
    for (const reference of buttonReferences.current) {
      reference.classList.remove('selected');
    }

    buttonReferences.current[index].classList.add('selected');
    setPreviousFilter_(filter);
    setFilter(filter);
  };

  const filterButtons = (setFilter, previousFilter_, setPreviousFilter_) =>
    filterProperties.map((property, index) => {
      const key = uuidv4();
      return (
        <FilterButton
          key={key}
          ref={(reference) => (buttonReferences.current[index] = reference)}
          className={previousFilter_ === property ? 'selected' : ''}
          onClick={() => onToggleFilter(property, setFilter, previousFilter_, setPreviousFilter_, index)}
        >
          {property}
        </FilterButton>
      );
    });

  const { searchQuery, setSearchQuery } = useContext(searchContext);
  const { setFilter } = useContext(filterContext);
  const [previousFilter, setPreviousFilter] = useState('');

  return (
    <FilterSearchWrapper>
      <FilterSearchContainer>
        <SearhContainer>
          <SearchLabel htmlFor="search">Looking for </SearchLabel>
          <SearchInput
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            name="search"
            autoComplete="off"
            placeholder="start typing here..."
          />
        </SearhContainer>
        <FilterContainer>
          <FiltersText>Or filter</FiltersText>
          <FilterButtonsContainer>{filterButtons(setFilter, previousFilter, setPreviousFilter)}</FilterButtonsContainer>
        </FilterContainer>
      </FilterSearchContainer>
    </FilterSearchWrapper>
  );
};

export default AppSearch;
