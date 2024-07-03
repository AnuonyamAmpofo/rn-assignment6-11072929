import react from "react";
import React, {useState, useEffect} from "react";
import { useFonts, TenorSans_400Regular } from "@expo-google-fonts/tenor-sans";
import { View, Text, Image, StyleSheet, SafeAreaView, ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Cart (){
    const [fontsLoaded] = useFonts({
        TenorSans_400Regular,
    });
    
    const[cartItems, setCartItems]= useState([]);
    useEffect(()=>{
        const fetchCartItems = async()=>{
            try{
                const cart= await AsyncStorage.getItem('cart');
                setCartItems(cart? JSON.parse(cart) : [])
            }
            catch(error){
                console.error('Error Loading Cart: ' ,error);
            }
        };
        fetchCartItems();
    }, []);

    const removeFromCart = async(item)=>{
        try{
            const updatedCart= cartItems.filter(cartItem=> cartItem.id!== item.id);
            setCartItems(updatedCart);
            await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));

        }
        catch(error){
            console.error('Error removing from cart: ', error);
        }
    }

    // if(!fontsLoaded){
    //     return(
    //         ActivityIndicator
    //     )
    // }
    const renderItem= ({item})=> (
        <View style={styles.productCont}>
            <View style={styles.imageCont}>
            <Image source={item.image} style={styles.productImage} />
            </View>
        
    <View style={styles.infoRemove}>
      <View style={styles.productInfo}>
        <Text style={styles.name}>{item.name.toUpperCase()}</Text>
        <Text style={styles.subName}>{item.subName}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item)}>
        <Image source={require('./assets/exit.png')} style={styles.removeIcon} />
      </TouchableOpacity>
    
      </View>
        </View>
    )

    return(
        <SafeAreaView style={styles.safeArea}>
        <View style= {styles.container}>
            <View style={styles.header}>
                <Image source={require('./assets/Logo.png')} style={styles.logo}/>
                <Image source={require('./assets/search.png')} style={styles.search}/>

            </View>

            <Text style={styles.checkout}>CHECKOUT</Text>

            <View style={styles.divider}>
                <View style={styles.line}/>
                <Image source={require('./assets/diamond.png')} style={styles.diamond}/>
                <View style={styles.line}/>
            </View>
        </View>
        <FlatList
            data={cartItems}
            keyExtractor={(item)=> item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.listcontainer}
        />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 15,
        backgroundColor: "#fff"
        
    },
    container:{
        
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo:{
        marginLeft: '39%',
        marginRight: 'auto',
        // width: 'auto',
        resizeMode: 'contain',
        // height: 'auto',
        tintColor: '#000'

    },
    search: {
        resizeMode: 'contain',
        width: 32,
        height: 32,
        marginRight: 10,
    },
    checkout:{
        fontFamily: 'TenorSans_400Regular',
        alignSelf: 'center',
        marginTop: 30,
        fontSize: 26,
        letterSpacing: 5

    },
    divider:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 94,


    },
    diamond:{
        width: 20,
        height: 15,

        resizeMode:"stretch",
        maringHorizontal: 10,
        tintColor: '#aaa',
        alignSelf: 'center'
    },
    line:{
        height:1,
        backgroundColor: '#aaa',
        flex: 1,
    },
    productCont:{
        flexDirection: 'row',
        paddingVertical: 0,
    },
    removeIcon:{
        // position: 'absolute',
        width: 35,
        height: 35,
        // justifyContent: 'flex-end'
        // alignSelf: 'baseline'
        // alignContent: 'bottom'
        // bottom: 20,
        tintColor: 'red',
        // paddingTop: 
        // alignItems: 'center'
        // right: -40,

    },
    removeButton:{
        // alignItems:'baseline'
        // top: 100,
        // right: 10,
        paddingTop: 150,

    },
    listcontainer:{
        marginTop: 10
    },
    productImage:{
        // height: 200,
        width: 140,
        resizeMode: 'contain'
    },
    productInfo:{
        alignSelf:'center',
        paddingLeft: 5,
    },
    name:{
        fontFamily: 'TenorSans_400Regular',
        fontSize: 17,
        color: "#000",
        letterSpacing: 5
        // fontWeight: '900'
    },
    subName:{
        fontFamily: 'TenorSans_400Regular',
        fontSize: 14,
        color: '#8a8a8a'

    },
    price:{
        color: '#dd8560',
        fontFamily: 'TenorSans_400Regular',
        fontSize: 17,
        marginVertical: 5,
    },
    infoRemove: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
})