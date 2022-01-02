import {RouteProp, useRoute} from '@react-navigation/core';
import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
  Switch,
  ScrollView,
  ImageSourcePropType,
} from 'react-native';
import {StoreStackParamList} from '../../nav/StoreStack';
import ButtonProperty from './ButtonProperty';
import OptionQuantity from './optionQuantity';
import OptionThermal from './OptionThermal';
import OptionType from './OptionType';
import OptionVolume from './OptionVolume';

const widthScreen = Dimensions.get('window').width;
const widthImage = widthScreen - 50;
const heightImage = (widthImage / 325) * 146;

export enum EType {
  one = 0,
  two = 1,
}

export enum EAttribute {
  hot = 0,
  cold = 1,
}

export enum EVolume {
  v250 = 0,
  v350 = 1,
  v450 = 2,
}

interface IObjCoffee {
  name: string;
  uri: ImageSourcePropType;
  quantity: number;
  type: EType;
  attribute: EAttribute;
  volume: EVolume;
  enableTime: boolean;
}

export interface IOrderOptionContext {
  objCoffee: IObjCoffee;
  setObjCoffee: React.Dispatch<React.SetStateAction<IObjCoffee>>;
  initValue: {
    types: {value: EType; name: string}[];
    attributes: {value: EAttribute; uri: ImageSourcePropType}[];
    volumes: {value: EVolume; uri: ImageSourcePropType; name: string}[];
  };
}

export const OrderOptionContext = React.createContext<IOrderOptionContext>({
  objCoffee: {
    name: '',
    uri: require('../../assets/icons/hot_icon.png'),
    quantity: 1,
    type: 0,
    attribute: 1,
    volume: 1,
    enableTime: false,
  },
  setObjCoffee: () => {},
  initValue: {
    types: [],
    attributes: [],
    volumes: [],
  },
});

const OrderOption = () => {
  const route = useRoute<RouteProp<StoreStackParamList, 'OrderOption'>>();
  const item = route.params.item;
  const initValue = React.useMemo(() => {
    return {
      types: [
        {
          value: 0,
          name: 'Один',
        },
        {
          value: 1,
          name: 'Два',
        },
      ],
      attributes: [
        {
          value: 0,
          uri: require('../../assets/icons/hot_icon.png'),
        },
        {
          value: 1,
          uri: require('../../assets/icons/cold_icon.png'),
        },
      ],
      volumes: [
        {
          value: 0,
          uri: require('../../assets/icons/S_volume.png'),
          name: '250',
        },
        {
          value: 1,
          uri: require('../../assets/icons/M_volume.png'),
          name: '350',
        },
        {
          value: 2,
          uri: require('../../assets/icons/L_volume.png'),
          name: '450',
        },
      ],
    };
  }, []);
  const [objCoffee, setObjCoffee] = React.useState<IObjCoffee>({
    name: item.name,
    uri: item.uri,
    quantity: 1,
    type: 0,
    attribute: 1,
    volume: 1,
    enableTime: false,
  });
  return (
    <OrderOptionContext.Provider
      value={{
        objCoffee,
        setObjCoffee,
        initValue,
      }}>
      <ScrollView contentContainerStyle={{backgroundColor: 'white'}}>
        <View style={styles.container}>
          <View style={styles.containerImg}>
            <Image source={objCoffee.uri} />
          </View>
          <View style={styles.rowItem}>
            <Text>{objCoffee.name}</Text>
            <OptionQuantity />
          </View>
          <View style={styles.line} />
          <View style={styles.rowItem}>
            <Text>Ристретто</Text>
            <OptionType />
          </View>
          <View style={styles.line} />
          <View style={styles.rowItem}>
            <Text>На месте / навынос</Text>
            <OptionThermal />
          </View>
          <View style={styles.line} />
          <View style={styles.rowItem}>
            <Text>Объем, мл</Text>
            <OptionVolume
              volume={objCoffee.volume}
              setObjCoffee={setObjCoffee}
              initVolumes={initValue.volumes}
            />
          </View>
          <View style={styles.line} />
          <View style={styles.rowItem}>
            <Text>Приготовить к определенному{'\n'}времени сегодня?</Text>
            <Switch
              value={objCoffee.enableTime}
              onValueChange={newEnableTime => {
                setObjCoffee(prevValue => {
                  const newValue = {
                    ...prevValue,
                    enableTime: newEnableTime,
                  };
                  return newValue;
                });
              }}
            />
          </View>
          <View style={[styles.rowItem, {justifyContent: 'flex-end'}]}>
            <View style={styles.timeContainer}>
              <Text style={{fontSize: 22}}>18 : 10</Text>
            </View>
          </View>
          <ButtonProperty title="Конструктор кофемана" />
          <View style={styles.rowItem}>
            <Text style={{color: 'rgba(0, 24, 51, 1)', fontSize: 16}}>
              Итоговая сумма
            </Text>
            <Text
              style={{
                color: 'rgba(0, 24, 51, 1)',
                fontSize: 16,
                fontWeight: '600',
              }}>
              BYN 3.00
            </Text>
          </View>
          <TouchableOpacity style={styles.doneBtn}>
            <Text style={{color: 'white'}}>Далее</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </OrderOptionContext.Provider>
  );
};

export default OrderOption;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
  },
  containerImg: {
    width: widthImage,
    height: heightImage,
    borderRadius: 12,
    backgroundColor: 'rgba(247, 248, 251, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowItem: {
    flexDirection: 'row',
    paddingVertical: 21,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  line: {
    height: 1,
    backgroundColor: 'rgba(244, 245, 247, 1)',
  },
  timeContainer: {
    width: 86,
    height: 36,
    backgroundColor: 'rgba(118, 118, 128, 0.12)',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  doneBtn: {
    backgroundColor: 'rgba(50, 74, 89, 1)',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    height: 46,
    marginBottom: '5%',
  },
});
