import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
  Dimensions
} from 'react-native';

//import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import API from './services/api';
import './config/ReactotronConfig';

//const { width, height } = Dimensions.get('window');


let numColumns = 1;
const App = () => {
  const [imageState, setImageState] = useState([]);

  useEffect(() => {
    function loadImages(){
      API.get()
      .then((response) => {
        var dados = response.data;
        var imgs = [];
        dados.map((item) => {
          if(item.images!=undefined){
            var objImages = item.images; 
            objImages.map((item2) => {
              if(!item2.mp4){
                imgs.push(item2);  
              }
            });
            //console.tron.log(imgs);
          }
        });
        setImageState(imgs);
      }, (error) => {
        console.tron.log('error: ', error)
      })
    }
    loadImages();
  },[]);

  
  return (
    <View style={styles.body} >
      <StatusBar barStyle="transparent" backgroundColor="grey" />
      <Text style={styles.text}>Imgur Cats Images!</Text>
      <FlatList
        horizontal={false}
        data={imageState}
        keyExtractor={(prop) => prop.id}
        //numColumns={3}
        renderItem={({item}) => (
          <View style={styles.container}>
            <Image source={{ uri: item.link }} resizeMode="contain" style={styles.images} />
          </View>
        )}
      />
        
    </View> 
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'grey',
    marginBottom: 15
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    //backgroundColor: 'red'
  },
  images: {
    width: 400, 
    height: 400,
    marginTop: 15,
    backgroundColor: 'grey',
    marginBottom: 15
  },
});

export default App;


//container2: {
//  flexGrow: 1,
//  flexBasis: 0,
//  backgroundColor: 'yellow',
//  width: 900
//},
//images2: {
//  width: 200, 
//  height: 200,
//  marginTop: 15,
//  backgroundColor: 'grey',
//  marginBottom: 15
//}