import { StatusBar, StatusBarStyle } from "react-native";
import { useIsFocused } from "@react-navigation/core";

interface FocusedStatusBarProps {
  background: string;
  barStyle?: StatusBarStyle;
  translucent?: boolean;
}

const FocusedStatusBar: React.FC<FocusedStatusBarProps> = (
  props: FocusedStatusBarProps
): React.ReactElement => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated {...props} /> : <></>;
};

export default FocusedStatusBar;
