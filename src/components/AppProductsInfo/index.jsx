import beanImage from '../../assets/Beens/Beens.png';
import {
  AboutProductImg,
  AboutProductWrapper,
  ArticleContainer,
  ArticleDescription,
  ArticleImgContainer,
  ArticleInfo,
  ArticleParagraph,
  ArticleParagraphName,
  ArticlePrice,
  ArticleTitle,
  SectionAboutProduct,
} from '../styles';

const AboutProductRender = (country, description, price) => {
  return (
    <>
      <ArticleParagraph>
        <ArticleParagraphName>Country:</ArticleParagraphName>
        <span>{country}</span>
      </ArticleParagraph>
      <ArticleParagraph>
        <ArticleParagraphName>Description:</ArticleParagraphName> <span>{description}</span>
      </ArticleParagraph>
      <ArticleParagraph>
        <ArticleParagraphName>Price:</ArticleParagraphName> <ArticlePrice>{price}</ArticlePrice>
      </ArticleParagraph>
    </>
  );
};

const AppProductsInfo = ({ title, description, image, alt, country, price }) => {
  return (
    <SectionAboutProduct>
      <AboutProductWrapper>
        <AboutProductImg>
          <img src={image} alt={alt} />
        </AboutProductImg>
        <ArticleContainer>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleImgContainer>
            <img src={beanImage} alt="beans" />
          </ArticleImgContainer>
          <ArticleInfo>
            {country && price && description ? (
              AboutProductRender(country, description, price)
            ) : (
              <ArticleDescription>{description} </ArticleDescription>
            )}
          </ArticleInfo>
        </ArticleContainer>
      </AboutProductWrapper>
    </SectionAboutProduct>
  );
};

export default AppProductsInfo;
