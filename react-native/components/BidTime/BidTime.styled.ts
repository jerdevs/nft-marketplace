import styled from "styled-components/native";
import { SIZES } from "../../constants/theme";

export const NFTCardContentContainerStyled = styled.View`
  width: 100%;
  padding: 0 ${SIZES.font}px;
  margin-top: -${SIZES.extraLarge}px;
  flex-direction: row;
  justify-content: space-between;
`;
