import React from "react";
import { COLORS } from "../../constants/theme";
import {
  AvatarContainerStyled,
  AvatarStyled,
  HomeHeaderBackgroundStyled,
  HomeHeaderContainerStyled,
  LogoStyled,
  BadgeStyled,
  GreetingContainerStyled,
  NameStyled,
  DescriptionStyled,
  SearchContainerStyled,
  SearchImageStyled,
  SearchTextInputStyled,
} from "./HomeHeader.styled";
import { AppContext } from "../../context/AppContext";
import Icon from "react-native-vector-icons/Ionicons";

interface HomeHeaderProps {
  onSearch?: (searchValue: string) => void;
}

const HomeHeader: React.FC<HomeHeaderProps> = (
  props: HomeHeaderProps
): React.ReactElement => {
  const { onSearch } = props;
  const { name } = React.useContext(AppContext);

  return (
    <HomeHeaderBackgroundStyled>
      <HomeHeaderContainerStyled>
        <LogoStyled
          source={require("../../assets/images/logo.png")}
          resizeMode="contain"
        />
        <AvatarContainerStyled>
          <AvatarStyled
            source={require("../../assets/images/person01.png")}
            resizeMode="contain"
          />
          <BadgeStyled
            source={require("../../assets/icons/badge.png")}
            resizeMode="contain"
          />
        </AvatarContainerStyled>
      </HomeHeaderContainerStyled>
      <GreetingContainerStyled>
        <NameStyled>Hello, {name} 👋</NameStyled>
        <DescriptionStyled>Let's find a masterpiece</DescriptionStyled>
      </GreetingContainerStyled>
      <SearchContainerStyled>
        <SearchImageStyled>
          <Icon name="search" size={20} color={COLORS.white} />
        </SearchImageStyled>
        <SearchTextInputStyled
          placeholderTextColor={COLORS.lightGray}
          placeholder="Search NFTs..."
          onChangeText={onSearch}
        />
      </SearchContainerStyled>
    </HomeHeaderBackgroundStyled>
  );
};

export default HomeHeader;
