import React, {useReducer} from 'react';
import {View, Text} from 'react-native';
import Button from '../components/Button';
import {Actions, Numbers, Operations, Specials} from '../constants/actions';
import {init, initState, reducer} from '../reducers/calculatorReducer';
import {styles} from '../theme/appTheme';

const CalculatorScreen = () => {
  const [{result, otherResult}, dispatch] = useReducer(
    reducer,
    initState,
    init,
  );

  const handleAction = (type: Actions) => {
    dispatch({type});
  };

  return (
    <View style={styles.background}>
      <View style={styles.resultContainer}>
        {Boolean(otherResult) && (
          <Text
            style={styles.otherResult}
            numberOfLines={1}
            adjustsFontSizeToFit>
            {otherResult}
          </Text>
        )}
        <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
          {result}
        </Text>
      </View>
      <View style={styles.row}>
        <Button
          action={Specials.RESET}
          color="#9B9B9B"
          textDark
          onPress={handleAction}
        />
        <Button
          action={Specials.MODE_OR_LESS}
          color="#9B9B9B"
          textDark
          onPress={handleAction}
        />
        <Button
          action={Specials.DELETE}
          color="#9B9B9B"
          textDark
          onPress={handleAction}
        />
        <Button
          action={Operations.DIVISION}
          color="#FF9427"
          onPress={handleAction}
        />
      </View>
      <View style={styles.row}>
        <Button action={Numbers.SEVEN} onPress={handleAction} />
        <Button action={Numbers.EIGHT} onPress={handleAction} />
        <Button action={Numbers.NINE} onPress={handleAction} />
        <Button
          action={Operations.MULTIPLICATION}
          color="#FF9427"
          onPress={handleAction}
        />
      </View>
      <View style={styles.row}>
        <Button action={Numbers.FOUR} onPress={handleAction} />
        <Button action={Numbers.FIVE} onPress={handleAction} />
        <Button action={Numbers.SIX} onPress={handleAction} />
        <Button
          action={Operations.SUBTRACTION}
          color="#FF9427"
          onPress={handleAction}
        />
      </View>
      <View style={styles.row}>
        <Button action={Numbers.ONE} onPress={handleAction} />
        <Button action={Numbers.TWO} onPress={handleAction} />
        <Button action={Numbers.THREE} onPress={handleAction} />
        <Button
          action={Operations.SUM}
          color="#FF9427"
          onPress={handleAction}
        />
      </View>
      <View style={styles.row}>
        <Button action={Numbers.ZERO} onPress={handleAction} x2Width />
        <Button action={Specials.POINT} onPress={handleAction} />
        <Button
          action={Specials.EQUAL}
          color="#FF9427"
          onPress={handleAction}
        />
      </View>
    </View>
  );
};

export default CalculatorScreen;
