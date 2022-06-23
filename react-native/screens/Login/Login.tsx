import React from "react";
import {
  LogoStyled,
  SafeAreaViewStyled,
  BackgroundStyled,
  TitleStyled,
  DescriptionStyled,
  FeatureImageStyled,
  NameTextInputStyled,
} from "./Login.styled";
import FocusedStatusBar from "../../components/FocusedStatusBar/FocusedStatusBar";
import { COLORS, ShadowType, SIZES } from "../../constants/theme";
import RectButton from "../../components/RectButton/RectButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { AppContext } from "../../context/AppContext";

const Register: React.FC = (): React.ReactElement => {
  const navigate = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [name, setName] = React.useState("");
  const { onLogin } = React.useContext(AppContext);

  return (
    <SafeAreaViewStyled>
      <FocusedStatusBar
        barStyle="dark-content"
        background="transparent"
        translucent
      />
      <BackgroundStyled>
        <LogoStyled
          source={require("../../assets/images/logo.png")}
          resizeMode="contain"
        />
        <FeatureImageStyled
          source={require("../../assets/images/feature.png")}
          resizeMode="contain"
        />
        <TitleStyled>The hottest NFT marketplace</TitleStyled>
        <DescriptionStyled>Discover, collect and sell</DescriptionStyled>
        <DescriptionStyled>extraordinary NFTs</DescriptionStyled>
        <NameTextInputStyled
          placeholderTextColor={COLORS.lightGray}
          placeholder="Your name"
          onChangeText={(value: string): void => setName(value)}
        />
        <RectButton
          title="Enter"
          width={120}
          fontSize={SIZES.medium}
          shadow={ShadowType.LIGHT}
          disabled={!name}
          handlePress={(): void => {
            navigate.navigate("Home", {});
            onLogin && onLogin(name);
          }}
        />
      </BackgroundStyled>
    </SafeAreaViewStyled>
  );
};

export default Register;
