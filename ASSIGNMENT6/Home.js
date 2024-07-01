import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { TenorSans_400Regular, useFonts} from '@expo-google-fonts/tenor-sans';
// import { baseGestureHandlerProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon';

export default function Home(){
    const [fontsLoaded] = useFonts({
        TenorSans_400Regular,
    });
    
    return(
        <View style ={styles.container}>
            <View style={styles.topHead}>
                <Image source={require('./assets/align-left.png')} style={styles.menu}/>
                <Image source={require('./assets/Logo.png')} style={styles.logo}/>
                <View style={styles.sopt}>
                    <Image source={require('./assets/search.png')} style={styles.search}/>
                    <Image source={require('./assets/shopping-bag.png')} style={styles.bag}/>
                </View>
            </View>
            <View style={styles.story}>
                <Text style={styles.stotext}>OUR STORY</Text>
                <View style={styles.lisfil}>
                <View style={styles.listcont}> 
                    <Image source={require('./assets/check-list.png')} style={styles.list}/> 
                    </View>
                <View style={styles.filcont}> 
                    <Image source={require('./assets/find.png')} style={styles.filter}/> 
                    </View>
                    </View>
            </View>

        </View>
    )
}


const styles= StyleSheet.create({
    container:{
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingHorizontal: 16,


    },
    topHead:{
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    menu:{
        resizeMode: 'contain',
        width: 32,
        height: 32,
        alignSelf: 'center'
    },
    sopt: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    search:{
        resizeMode: 'contain',
        width: 32,
        height: 32,
        // marginHorizontal:10,
        marginRight: 10,
        marginLeft: -40,
        alignSelf: 'center'

    },
    bag:{
        resizeMode: 'contain',
        width: 37,
        height: 37,
        alignSelf: 'center'

    },
    story:{
        flexDirection: 'row',
        marginVertical: 30,
        justifyContent: 'space-between'
        // flex: 1,
    },
    lisfil:{
        flexDirection: 'row',
        // paddingHorizontal: 10,
    },
    stotext:{
        fontSize: 25,
        fontFamily: 'TenorSans_400Regular',
        letterSpacing: 4,
        alignContent: 'center',
        alignSelf: 'center'
    },
    listcont:{
        // resizeMode:'contain',
        width: 50,
        height: 50,
        backgroundColor: '#f2f2f3',
        borderRadius: 50,
        marginHorizontal: 15,
        
        

    },
    list:{
        resizeMode: 'contain',
        width:25,
        height: 25,
        alignSelf: 'center',
        // justifyContent: 'center',
        // verticalAlign: 'bottom',
        paddingTop: 30,
        marginTop: 10,
    },
    filcont:{
        // resizeMode:'contain',
        width: 50,
        height: 50,
        backgroundColor: '#f2f2f3',
        // alignContent:'center',
        borderRadius: 50,
        paddingTop: 5,
        // alignContent: 'center'
        

    },
    filter:{
        resizeMode: 'contain',
        width:40,
        height: 40,
        alignSelf: 'center',
        tintColor: '#FF630C'
        // alignItems:'baseline'
    }


})