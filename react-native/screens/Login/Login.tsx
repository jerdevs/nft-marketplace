import React from "react";
import {
  LogoStyled,
  SafeAreaViewStyled,
  BackgroundStyled,
  TitleStyled,
  DescriptionStyled,
  FeatureImageStyled,
  NameTextInputStyled,
  LoginContainerStyled,
  DescriptionContainerStyled,
} from "./Login.styled";
import FocusedStatusBar from "../../components/FocusedStatusBar/FocusedStatusBar";
import { COLORS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { AppContext } from "../../context/AppContext";
import { KeyboardAvoidingView, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Register: React.FC = (): React.ReactElement => {
  const navigate = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { name, updateName } = React.useContext(AppContext);

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
        <DescriptionContainerStyled>
          <DescriptionStyled>Discover, collect and sell</DescriptionStyled>
          <DescriptionStyled>extraordinary NFTs</DescriptionStyled>
        </DescriptionContainerStyled>
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={150}>
          <LoginContainerStyled>
            <NameTextInputStyled
              value={name}
              placeholderTextColor={COLORS.lightGray}
              placeholder="Your name"
              onChangeText={(value: string): void =>
                updateName && updateName(value)
              }
            />
            <View>
              {!name ? (
                <Icon name="enter" size={24} color={COLORS.secondary} />
              ) : (
                <Icon
                  name="enter"
                  size={24}
                  color={COLORS.white}
                  onPress={(): void => {
                    navigate.navigate("Home", {});
                    updateName && updateName(name);
                  }}
                />
              )}
            </View>
          </LoginContainerStyled>
        </KeyboardAvoidingView>
      </BackgroundStyled>
    </SafeAreaViewStyled>
  );
};

export default Register;
