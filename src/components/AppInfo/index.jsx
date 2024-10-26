import Beans from '../../assets/Beens/Beens.png';
import { BannerButton, ImgCenter, InfoText, InfoTitle, SectionInfo, WrapperInfo } from '../styles';

const AppInfo = () => {
  return (
    <SectionInfo>
      <WrapperInfo>
        <InfoTitle>About us</InfoTitle>
        <ImgCenter src={Beans} alt="Beans" />
        <InfoText>
          Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do
          things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased
          improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At
          it went is song that held help face.
        </InfoText>
        <InfoText>
          Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for
          ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture
          set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day
          ladies now.
        </InfoText>
        <BannerButton>Try best</BannerButton>
      </WrapperInfo>
    </SectionInfo>
  );
};

export default AppInfo;
