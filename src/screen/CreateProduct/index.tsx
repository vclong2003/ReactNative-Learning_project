import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Assets, Button} from 'react-native-ui-lib';
import api from '../../api';
import Input from '../../Components/input';
const CreateProduct = () => {
  const [loading, setLoading] = React.useState(false);
  const [productInfo, setProductInfo] = React.useState({
    name: '',
  });
  const onCreateProduct = React.useCallback(async () => {
    console.log(productInfo);
    setLoading(true);
    try {
      const res = await fetch(api.createProduct, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          token:`Bearer rj8238467346857346785`
        },
        body: JSON.stringify({
          name: productInfo.name,
        }),
      });
      const resToJson = await res.json();
      setLoading(false);
      console.log('resToJson', resToJson);
    } catch (error) {
      setLoading(false);
    }
  }, [productInfo]);
  return (
    <View flex padding-16>
      <Input
        placeholder="Enter Name Product"
        source={Assets.icons.iconEmail}
        value={productInfo.name}
        onChangeText={name => {
          setProductInfo(prev => ({...prev, name}));
        }}
        secureTextEntry={false}
      />

      <Button
        label={!!loading ? 'Loading' : 'Create'}
        marginT-20
        onPress={onCreateProduct}
        disabled={!!loading}
      />
    </View>
  );
};

export default CreateProduct;

const styles = StyleSheet.create({});