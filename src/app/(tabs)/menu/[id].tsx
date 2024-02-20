import { View, Text } from 'react-native';
import {Stack, useLocalSearchParams} from "expo-router";

const ProductDetailsScreen = () => {
    const { id } = useLocalSearchParams();


    return (
        <View>
            <Stack.Screen options={{ title: 'Product Details' }} />

            <Text>ProductDetailsScreen for id: {id}</Text>
        </View>
    );
}

export default ProductDetailsScreen;