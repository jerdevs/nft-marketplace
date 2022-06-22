import React from "react";
import {
  DetailsDescriptionContainerStyled,
  DetailsDescriptionStyled,
  DetailsDescriptionTextStyled,
  DetailsDescriptionTitleStyled,
  DetailsDescriptionViewStyled,
  ReadMoreTextStyled,
} from "./DetailsDescription.styled";
import { NFT } from "../../constants/data";
import NFTCardTitle from "../NFTCardTitle/NFTCardTitle";
import { SIZES } from "../../constants/theme";
import NFTEthPrice from "../NFTEthPrice/NFTEthPrice";

interface DetailsDescriptionProps {
  data: NFT;
}

const DetailsDescription: React.FC<DetailsDescriptionProps> = (
  props: DetailsDescriptionProps
): React.ReactElement => {
  const {
    data: { name, creator, price, description, likes },
  } = props;
  const [text, setText] = React.useState(description.slice(0, 100));
  const [readMore, setReadMore] = React.useState(false);

  return (
    <>
      <DetailsDescriptionContainerStyled>
        <NFTCardTitle
          name={name}
          creator={creator}
          nameSize={SIZES.extraLarge}
          creatorSize={SIZES.font}
          likes={likes}
        />
        <NFTEthPrice price={price} />
      </DetailsDescriptionContainerStyled>
      <DetailsDescriptionStyled>
        <DetailsDescriptionTitleStyled>
          Description
        </DetailsDescriptionTitleStyled>
        <DetailsDescriptionViewStyled>
          <DetailsDescriptionTextStyled>
            {text}
            {!readMore && "..."}
            <ReadMoreTextStyled
              onPress={(): void => {
                if (!readMore) {
                  setText(description);
                } else {
                  setText(description.slice(0, 100));
                }
                setReadMore(!readMore);
              }}
            >
              {readMore ? " Show Less" : " Read More"}
            </ReadMoreTextStyled>
          </DetailsDescriptionTextStyled>
        </DetailsDescriptionViewStyled>
      </DetailsDescriptionStyled>
    </>
  );
};

export default DetailsDescription;
