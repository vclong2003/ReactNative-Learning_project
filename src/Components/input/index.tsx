import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ImageSourcePropType,
  KeyboardTypeOptions,
} from 'react-native';

interface Props {
  source: ImageSourcePropType;
  placeholder: string;
  secureTextEntry: boolean;
  value: string;
  onChangeText: (value: string) => void;
  keyboardType?: KeyboardTypeOptions | undefined;
}

const Input = ({
  source,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  keyboardType,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <Image source={source} />
      </View>
      <View style={styles.line} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#C1C7D0"
        style={styles.txtInput}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
      {!!secureTextEntry ? (
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/show_pwd_icon.png')}
            style={{marginTop: '30%'}}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#C1C7D0',
    paddingBottom: 4,
  },
  containerIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    height: 25,
    width: 1,
    backgroundColor: '#C1C7D0',
    marginLeft: 4,
    marginRight: 12,
  },
  txtInput: {
    flex: 1,
    fontSize: 12,
    padding: 0,
  },
});
