import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { TenorSans_400Regular, useFonts } from '@expo-google-fonts/tenor-sans';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const [fontsLoaded] = useFonts({
        TenorSans_400Regular,
    });

    const navigation = useNavigation();

    const [products, setProducts] = useState([
        { id: 1, name: 'Office Wear', subName: 'Office Wear for your office', price: '$120', image: require('./assets/dress1.png') },
        { id: 2, name: 'Black', subName: 'reversible angora cardigan', price: '$120', image: require('./assets/dress2.png') },
        { id: 3, name: 'Church Wear', subName: 'reversible angora cardigan', price: '$120', image: require('./assets/dress3.png') },
        { id: 4, name: 'Lamerei', subName: 'reversible angora cardigan', price: '$120', image: require('./assets/dress4.png') },
        { id: 5, name: '21WN', subName: 'reversible angora cardigan', price: '$120', image: require('./assets/dress5.png') },
        { id: 6, name: 'Lopo', subName: 'reversible angora cardigan', price: '$120', image: require('./assets/dress6.png') },
        { id: 7, name: '21WN', subName: 'reversible angora cardigan', price: '$120', image: require('./assets/dress7.png') },
        { id: 8, name: 'lame', subName: 'reversible angora cardigan', price: '$120', image: require('./assets/dress3.png') },
    ]);

    const addToCart = async (product) => {
        try {
            const cart = await AsyncStorage.getItem('cart'); //retrieve cart from asyncstorage.
            const cartItems = cart ? JSON.parse(cart) : []; //parse the cart if it exists, or initialize an empty array
            cartItems.push(product);
            await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
            alert('Product added to cart!');
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
        
            <View style={styles.container}>
                <View style={styles.topHead}>
                    <Image source={require('./assets/align-left.png')} style={styles.menu} />
                    <Image source={require('./assets/Logo.png')} style={styles.logo} />
                    <View style={styles.sopt}>
                        <Image source={require('./assets/search.png')} style={styles.search} />
                        <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
                            <Image source={require('./assets/shopping-bag.png')} style={styles.bag} />
                        
                        </TouchableOpacity>
                    </View>
                </View>
                            <View style={styles.story}>
                    <Text style={styles.stotext}>OUR STORY</Text>
                    <View style={styles.lisfil}>
                        <TouchableOpacity style={styles.listcont}>
                            <Image source={require('./assets/check-list.png')} style={styles.list} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.filcont}>
                            <Image source={require('./assets/find.png')} style={styles.filter} />
                        </TouchableOpacity>
                    </View>
                </View>

                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    
                    renderItem={({ item }) => (
                        <View style={styles.productCont}>
                            <View style={styles.product}>
                                <View style={styles.imageview}>
                                    <Image source={item.image} style={styles.image} />
                                    <TouchableOpacity style={styles.addCont} onPress={() => addToCart(item)}>
                                        <Image source={require('./assets/add.png')} style={styles.addIcon} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.infoContainer}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.subName}>{item.subName}</Text>
                                    <Text style={styles.price}>{item.price}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                    numColumns={2}
                    contentContainerStyle={styles.contentContainer}
                />
                
            </View>
            </SafeAreaView>
            // {/* </ScrollView> */}
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: 50
    },
    container: {
        paddingHorizontal: 15,
    },
    topHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    menu: {
        resizeMode: 'contain',
        width: 32,
        height: 32,
        alignSelf: 'center',
    },
    sopt: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    search: {
        resizeMode: 'contain',
        width: 32,
        height: 32,
        marginRight: 10,
        marginLeft: -40,
        alignSelf: 'center',
    },
    bag: {
        resizeMode: 'contain',
        width: 37,
        height: 37,
        alignSelf: 'center',
    },
    story: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 10,
        justifyContent: 'space-between',
    },
    lisfil: {
        flexDirection: 'row',
    },
    stotext: {
        fontSize: 25,
        fontFamily: 'TenorSans_400Regular',
        letterSpacing: 4,
        alignContent: 'center',
        alignSelf: 'center',
    },
    listcont: {
        width: 50,
        height: 50,
        backgroundColor: '#f2f2f3',
        borderRadius: 50,
        marginHorizontal: 15,
    },
    list: {
        resizeMode: 'contain',
        width: 25,
        height: 25,
        alignSelf: 'center',
        paddingTop: 30,
        marginTop: 10,
    },
    filcont: {
        width: 50,
        height: 50,
        backgroundColor: '#f2f2f3',
        borderRadius: 50,
        paddingTop: 5,
    },
    filter: {
        resizeMode: 'contain',
        width: 40,
        height: 40,
        alignSelf: 'center',
        tintColor: '#FF630C',
    },
    imageview: {
        width: '100%',
        alignItems: 'center',
    },
    product: {
        width: '100%',
    },
    image: {
        width: '100%',
        height: 225,
        resizeMode: 'contain',
    },
    addCont: {
        position: 'absolute',
        bottom: 8,
        right: 20,
        alignItems: 'center',
    },
    addIcon: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
    },
    infoContainer: {
        alignSelf: 'center',
        marginVertical: 10,
    },
    name:{
        fontFamily: 'TenorSans_400Regular',
        fontSize: 12,
        color: "#000"
        // fontWeight: '900'
    },
    subName:{
        fontFamily: 'TenorSans_400Regular',
        fontSize: 12,
        color: '#8a8a8a'

    },
    price:{
        color: '#dd8560',
        fontFamily: 'TenorSans_400Regular',
        fontSize: 17,
        marginVertical: 5,
    },
    contentContainer: {
        paddingBottom: 120,
    },
    productCont: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 10,
        // paddingHorizontal:4,
    },
});
