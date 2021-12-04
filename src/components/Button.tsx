import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Actions} from '../constants/actions';
import {styles} from '../theme/appTheme';

interface ButtonProps {
  action: Actions;
  color?: string;
  textDark?: boolean;
  x2Width?: boolean;
  onPress: (type: Actions) => void;
}

const Button: FC<ButtonProps> = ({
  action,
  color = '#2D2D2D',
  textDark = false,
  x2Width = false,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => onPress(action)}>
      <View
        style={[
          styles.btn,
          {backgroundColor: color, width: x2Width ? 180 : 80},
        ]}>
        <Text style={[styles.btnText, {color: textDark ? 'black' : 'white'}]}>
          {action}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
