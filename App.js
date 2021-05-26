import React from 'react';
import useState from "react";
import {
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SectionList,
  Modal,
  TextInput,
  Alert
} from "react-native";
import { withNavigation } from "react-navigation";
import { BackHandler } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { createAppContainer, createNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Picker } from '@react-native-community/picker';
import { State } from 'react-native-gesture-handler';
class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={MainStyles.container} >
        <View style={MainStyles.head}>
          <Image source={require('./assets/logo.png')} style={MainStyles.logo}></Image>
        </View>
        <View style={MainStyles.frame}>
          <TouchableOpacity style={MainStyles.squareButton} onPress={() => this.props.navigation.navigate('Age')}>
            <View style={{ alignItems: "center", top: 3 }}>
              <Image source={require('./assets/1.png')} style={MainStyles.imageIcon1}></Image>
              <Text style={MainStyles.text}>ทำแบบคัดกรอง</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={MainStyles.squareButton2} onPress={() => this.props.navigation.navigate('SearchConsult')}>
            <View style={{ alignItems: "center" }}>
              <Image source={require('./assets/man1.png')} style={MainStyles.imageIcon3} ></Image>
              <Text style={MainStyles.text}>ค้นหาที่ปรึกษา</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={MainStyles.squareButton3} onPress={() => this.props.navigation.navigate('Diary')}>
            <View style={{ alignItems: "center" }}>
              <Image source={require('./assets/2.png')} style={MainStyles.imageIcon2} ></Image>
              <Text style={MainStyles.text}>Mood Diary</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView >
    );
  }
}

const MainStyles = StyleSheet.create({
  logo: {
    marginLeft: 30,
    marginBottom: -33
  },
  head: {
    position: "absolute",
    height: '16%',
    width: '100%',
    backgroundColor: "#DDEBEB",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  imageIcon1: {
    marginBottom: 10,
    marginLeft: 8,
    marginBottom: 7
  },
  imageIcon2: {
    marginBottom: 5,
    marginTop: 10,
    width: 75,
    height: 60
  },
  imageIcon3: {
    marginBottom: 7,
    marginTop: 6,
  },
  text: {
    fontSize: 20,
    color: "black",
  },
  squareButton: {
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#A0CDCA",
    height: 120,
    width: 165,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 55,
    shadowColor: "black",
    shadowRadius: 50,
    shadowOpacity: 60,
    top:'15%'
  },
  squareButton2: {
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#A0CDCA",
    height: 120,
    width: 165,
    borderRadius: 5,
    alignItems: 'center',
    top:'19%'
  },
  squareButton3: {
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#A0CDCA",
    height: 120,
    width: 165,
    borderRadius: 5,
    alignItems: 'center',
    top:'23%'
  },
  frame: {
    flex: 1,
    flexDirection:"column",
    marginHorizontal: 18,
    marginVertical: 18,
    borderWidth: 1,
    borderColor: "#969696",
    alignItems: "center"
  },
  container: {
    flex: 1,
  },
  BackgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
});
//======================================================== AgeScreen =================================================//
var Sound = require('react-native-sound');
var counter = 0 ;
class AgeScreen extends React.Component {  
  constructor(props) {
    super(props);
    }
    _onHideUnderlay=()=> {
      this.setState({ pressStatus: false });
      }
     _onShowUnderlay=()=> {
      this.setState({ pressStatus: true });
      }
  state = {
    counter: 0,
    gray1pressStatus:false,
    gray2pressStatus:false,
    gray3pressStatus:false,
    gray4pressStatus:false,
  }
  checkNext(){
    if (counter == 1 ){this.resetGray();this.props.navigation.navigate('Question3')}
    if (counter == 2 ){this.resetGray();this.props.navigation.navigate('Question')}
    if (counter == 3 ){this.resetGray();this.props.navigation.navigate('Question2')}
    else {}
  }
  resetGray() {
    Next = 0;
    select = 0;
    scoreQ = 0;
    checkmode = 1;
    this.setState({
      gray1pressStatus:false,
      gray2pressStatus:false,
      gray3pressStatus:false,
    })
  }
  newslect1() {
   counter = 1
   this.setState({
    gray1pressStatus:true,
    gray2pressStatus:false,
    gray3pressStatus:false,
  })
  }
  newslect2() {
    counter = 2
    this.setState({
      gray1pressStatus:false,
      gray2pressStatus:true,
      gray3pressStatus:false,
    })
   }
   newslect3() {
    counter = 3
    this.setState({
      gray1pressStatus:false,
      gray2pressStatus:false,
      gray3pressStatus:true,
    })
   }

    render() {     
        return (  
            <SafeAreaView style={AgeStyles.container}>
        <View style={AgeStyles.frame}>
        <View style={AgeStyles.circle}>
            <View style={{alignItems:"center"}}>
            <Image source={require('./assets/man.png')} style={AgeStyles.imageIcon1}></Image>
        <Text style={AgeStyles.textcircle}>Your Age</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={10} style={this.state.gray1pressStatus ? AgeStyles.squareButtonGray1: AgeStyles.squareButton1}  onPress={() => this.newslect1()} onPressOut = {this.reset}   >
            <View style={{alignItems:"center", top:3}}>
              <Text style={AgeStyles.text}>7 - 17 years</Text>
            </View>
          </TouchableOpacity >
          <TouchableOpacity activeOpacity={10} style={this.state.gray2pressStatus? AgeStyles.squareButtonGray2: AgeStyles.squareButton2}  onPress={() => this.newslect2()} onPressOut = {this.reset} >
            <View style={{alignItems:"center",top:2}}>
              <Text style={AgeStyles.text}>18 - 59 years</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={10} style={this.state.gray3pressStatus? AgeStyles.squareButtonGray3: AgeStyles.squareButton3}  onPress={() => this.newslect3()} onPressOut = {this.reset}>
            <View style={{alignItems:"center",top:1}}>
              <Text style={AgeStyles.text}>above 60 years</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity  style={QuestionStyles.buttonNextonage, {top:'26%', left:'41%'}} 
              onPress={() => this.checkNext()}
              >
          <View style={{flexDirection : "row"}} >
              <Text style={QuestionStyles.next}>Next</Text>
              <Image style={{left:-15, top: 3}} source={require('./assets/next.png')} ></Image>
            </View>
          </TouchableOpacity>
        </View>
        <View style={AgeStyles.head}>
        <Image source={require('./assets/whitelogo.png')} style={AgeStyles.logo}></Image>
        </View>
    </SafeAreaView >
    );  
    }  
    reset = () => {
      this.setState({
        counter: this.state.counter = 0 ,
      })
    }
}  

const AgeStyles = StyleSheet.create({
    nextButton:{
    },
    logo:{
      position:"relative",
      marginLeft:30,
    },
    head:{
      position:"absolute",
      height:'14%',
      width:'100%',
      backgroundColor:"#60A8A4",
      alignItems:"center", 
      justifyContent: "center",
    },
    imageIcon1: {
      height:70,
      width :66,
      marginBottom:5,
      marginLeft:2,
    },
    imageIcon2: {
      marginBottom:5,
      marginTop:10,
      width:75,
      height:60
    },
    text: {
      top: '-12%',
      fontSize: 25,
      color: "white",
      marginTop: 7,
    },
    textN: {
     
      fontSize: 25,
      color: "#585858",
      
    },
    textN2: {
      fontSize: 25,
      color: "white",
      textAlign: 'center'
    },
    textN3: {
      textAlign: 'center',
      fontSize: 20,
      color: "white",
    },
    textcountQ2: {
      top: '5%',
      fontSize: 26,
      color: "white",
      textAlign: 'center'
    },

    textcircle: {
      top: '-5%',
      fontSize: 23,
      color:"#585858",
      marginTop: 7,
    },
    squareButton1: {
      textAlign: "center",
      justifyContent: "center",
      backgroundColor: "#A0CDCA",
      height: 60,
      width: 233,
      borderRadius: 5,
      alignItems: 'center',
      top: '20%',
      marginTop: 30,
    },
    squareButton2: {
      textAlign: "center",
      justifyContent: "center",
      backgroundColor: "#87B3CC",
      height: 60,
      width: 233,
      borderRadius: 5,
      alignItems: 'center',
      top: '19%',
      marginTop: 30,
    },
    squareButton3: {
      textAlign: "center",
      justifyContent: "center",
      backgroundColor: "#A091BC",
      height: 60,
      width: 233,
      borderRadius: 5,
      alignItems: 'center',
      top: '18%',
      marginTop: 30,
    },
    squareButtonGray1: {
      textAlign: "center",
      justifyContent: "center",
      backgroundColor: "#B7B7B7",
      height: 60,
      width: 233,
      borderRadius: 5,
      alignItems: 'center',
      top: '20%',
      marginTop: 30,
    },
    squareButtonGray2: {
      textAlign: "center",
      justifyContent: "center",
      backgroundColor: "#B7B7B7",
      height: 60,
      width: 233,
      borderRadius: 5,
      alignItems: 'center',
      top: '19%',
      marginTop: 30,
    },
    squareButtonGray3: {
      textAlign: "center",
      justifyContent: "center",
      backgroundColor: "#B7B7B7",
      height: 60,
      width: 233,
      borderRadius: 5,
      alignItems: 'center',
      top: '18%',
      marginTop: 30,
    },
    
    circle: {
      textAlign: "center",
      justifyContent: "center",
      backgroundColor: "#DFEEEE",
      height: 164,
      width: 164,
      borderRadius: 100,
      alignItems: 'center',
      top: '19%',
      shadowColor: "black",
      shadowRadius: 100,
      shadowOpacity: 60,
    },
    frame: {
      flex: 1,
      marginHorizontal: 18,
      marginVertical: 18,
      borderWidth: 1,
      borderColor: "#969696",
      alignItems: "center"
      
    },
    container: {
      flex: 1,
    },
    
  });

//================================= For Bird ================= QuestionScreen ===========================================  
var ResultNumber = 1
var AgeType = 2
var scoreQ = 0;
var select = 0;
var Next = 0;
var checkmode = 1;
import {adultdata} from './filedata2';
class QuestionScreen extends React.Component {  
  constructor(props) {
    super(props);
    this.sound = new Array();
    this.sound[0] = new Sound('a1q1.mp3',Sound.MAIN_BUNDLE) 
    this.sound[1] = new Sound('a1q2.mp3',Sound.MAIN_BUNDLE) 
    this.sound[2] = new Sound('a2q1.mp3',Sound.MAIN_BUNDLE)
    this.sound[3] = new Sound('a2q2.mp3',Sound.MAIN_BUNDLE)
    this.sound[4] = new Sound('a2q3.mp3',Sound.MAIN_BUNDLE)
    this.sound[5] = new Sound('a2q4.mp3',Sound.MAIN_BUNDLE)
    this.sound[6] = new Sound('a2q5.mp3',Sound.MAIN_BUNDLE)
    this.sound[7] = new Sound('a2q6.mp3',Sound.MAIN_BUNDLE)
    this.sound[8] = new Sound('a2q7.mp3',Sound.MAIN_BUNDLE)
    this.sound[9] = new Sound('a2q8.mp3',Sound.MAIN_BUNDLE)
    this.sound[10] = new Sound('a2q9.mp3',Sound.MAIN_BUNDLE)
    this.sound[11] = new Sound('a3q1.mp3',Sound.MAIN_BUNDLE)
    this.sound[12] = new Sound('a3q2.mp3',Sound.MAIN_BUNDLE)
    this.sound[13] = new Sound('a3q3.mp3',Sound.MAIN_BUNDLE)
    this.sound[14] = new Sound('a3q4.mp3',Sound.MAIN_BUNDLE)
    this.sound[15] = new Sound('a3q5.mp3',Sound.MAIN_BUNDLE)
    this.sound[16] = new Sound('a3q6.mp3',Sound.MAIN_BUNDLE)
    this.sound[17] = new Sound('a3q7.mp3',Sound.MAIN_BUNDLE)
    this.sound[18] = new Sound('a3q8.mp3',Sound.MAIN_BUNDLE)
    this.sound[19] = new Sound('a3q9.mp3',Sound.MAIN_BUNDLE)
    this.sound[20] = new Sound('a3q10.mp3',Sound.MAIN_BUNDLE)
  }
  playSound(num){
    if(!this.state.on) {
        this.sound[num].play(); this.setState({on : true});
      }
      else{
        this.sound[num].stop(); this.setState({on : false});
      }
      
  }
  stopSound(num){
    this.sound[num].stop(); this.setState({on : false})
  }
  updataScore1(i,j)
  { this.stopSound(j); 
    select=0;
    if(i == 1){if(this.state.end!=true) scoreQ = scoreQ + adultdata[j].score1;Next++;select=0;this.stopSound(j)}
    if(i == 2){if(this.state.end!=true) scoreQ = scoreQ + adultdata[j].score2;Next++;select=0;this.stopSound(j)}
    if(j == 1){if(scoreQ >= 1 ){Next = 2 ;checkmode = 2 ;select = 0; scoreQ =0 ; this.stopSound(j);this.props.navigation.navigate('Question')}
  else {
    this.setState({end:true}) 
    ResultNumber = 2; AgeType = 1;
    this.props.navigation.navigate('Result');select=0;}
  }
  this.resetGray1();
  }
  updataScore2(i,j){
    this.stopSound(j);
    this.resetGray1();
    if(i == 1){scoreQ = scoreQ + adultdata[j].score1;this.checkgoback(j);select=0}
    if(i == 2){scoreQ = scoreQ + adultdata[j].score2;this.checkgoback(j);select=0}
    if(i == 3){scoreQ = scoreQ + adultdata[j].score3;this.checkgoback(j);select=0}
    if(i == 4){scoreQ = scoreQ + adultdata[j].score4;this.checkgoback(j);select=0}
 }
 checkgoback(x){
  if (x == 10){if(scoreQ > 7 ){checkmode = 3;select= 0; scoreQ =0 ;Next++;this.props.navigation.navigate('Question')}
  else{ ResultNumber = 2; AgeType = 1; this.props.navigation.navigate('Result')}}
  else{Next++}
}
 updataScore3(i,j){
  this.stopSound(j);
  this.resetGray1();
  //if(j == 13){if(i == 1){select = 0;scoreQ = scoreQ + adultdata[j].score1;Next = 14;setMode3();}else{scoreQ = scoreQ + adultdata[j].score1;Next = 15}}
  if(i == 1){ if(this.state.end!=true) scoreQ = scoreQ + adultdata[j].score1; 
    if( j == 18 ){
      this.setState({end:true})
      if(scoreQ>=0&&scoreQ<=8){ResultNumber = 3; AgeType = 1;}
      else if(scoreQ>=9&&scoreQ<=16){ResultNumber = 4; AgeType = 1;}
      else if(scoreQ>=17 ){ResultNumber = 5; AgeType = 1;}
      this.props.navigation.navigate('Result')
    }
    else{Next++};select=0}
  if(i == 2){if(this.state.end!=true) scoreQ = scoreQ + adultdata[j].score2; 
    if(j == 13){Next++;}
    if( j == 18 ){
      this.setState({end:true})
      if(scoreQ>=0&&scoreQ<=8){ResultNumber = 3; AgeType = 1;}
      else if(scoreQ>=9&&scoreQ<=16){ResultNumber = 4; AgeType = 1;}
      else if(scoreQ>=17 ){ResultNumber = 5; AgeType = 1;} 
      this.props.navigation.navigate('Result')
    }
    else{Next++};select=0
  }
}
 NextQ(i){
    var show ;
    show = adultdata[i].q
    return show}
 NextQ3(i){
    var show ;
    show = adultdata[i].q
    return show
 }
 resetGray1() {
   select=0
  this.setState({
    gray1pressStatus:false,
    gray2pressStatus:false,
    gray3pressStatus:false,
    gray4pressStatus:false,
  })
}
   selectQ1C1(){
    select = 1
    this.setState({
      gray1pressStatus:true,
      gray2pressStatus:false,
    })
   }
   selectQ1C2() {
    select = 2
    this.setState({
      gray1pressStatus:false,
      gray2pressStatus:true,
    })
   }
   selectQ2C1() {
    select = 1
    this.setState({
      gray1pressStatus:true,
      gray2pressStatus:false,
      gray3pressStatus:false,
      gray4pressStatus:false,
    })
   }
   selectQ2C2() {
    select = 2
    this.setState({
      gray1pressStatus:false,
      gray2pressStatus:true,
      gray3pressStatus:false,
      gray4pressStatus:false,
    })
   }
   selectQ2C3() {
    select = 3
    this.setState({
      gray1pressStatus:false,
      gray2pressStatus:false,
      gray3pressStatus:true,
      gray4pressStatus:false,
    })
   }
   selectQ2C4() {
    select = 4
    this.setState({
      gray1pressStatus:false,
      gray2pressStatus:false,
      gray3pressStatus:false,
      gray4pressStatus:true,
    })
   }
   selectQ3C1(){
    select = 1
    this.setState({
      gray1pressStatus:true,
      gray2pressStatus:false,
    })
   }
   selectQ3C2() {
    select = 2
    this.setState({
      gray1pressStatus:false,
      gray2pressStatus:true,
    })
   }
   state = {
    select: 0,
    end:false,
    gray1pressStatus:false,
    gray2pressStatus:false,
    gray3pressStatus:false,
    gray4pressStatus:false,
    on : false, 
  }
    render() {  
      if (checkmode == 1) { //2 choice
        return (  
          <SafeAreaView style={QuestionStyles.container}>
            <View style={AgeStyles.frame}>
            <TouchableOpacity onPress = {() => this.playSound(Next)}
            style={SuggestionStyles.circle} >
                <Image source={require('./assets/talk.png')} style={SuggestionStyles.none}></Image>
                <Text style={QuestionStyles.smallText}>ฟังก์ชันช่วยอ่าน</Text>
           </TouchableOpacity>
            <View style={QuestionStyles.boxoftext}>
      <Text style={QuestionStyles.textinbox} >{this.NextQ(Next)}</Text>
              </View>
            <TouchableOpacity style={QuestionStyles.buttonQ1C1 , {top:'-50%'}}  
            activeOpacity={10} style={this.state.gray1pressStatus ? QuestionStyles.buttonQ1C1Gray: QuestionStyles.buttonQ1C1}
            onPress = {() => this.selectQ1C1()} onPressOut = {this.reset} >
              <View style={{ alignItems: "center", top: 2 }}>
                <Text style={QuestionStyles.textN3}>{adultdata[Next].choice1}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={QuestionStyles.buttonQ1C2}
            activeOpacity={10} style={this.state.gray2pressStatus? QuestionStyles.buttonQ1C2Gray: QuestionStyles.buttonQ1C2}
            onPress = {() => this.selectQ1C2()} onPressOut = {this.reset} >
              <View style={{ alignItems: "center", top: 2 }}>
                <Text style={QuestionStyles.textN3}>{adultdata[Next].choice2}</Text>
              </View>
            </TouchableOpacity>
            <View style={QuestionStyles.buttonCount} >
        <Text style={AgeStyles.textcountQ2}>{Next+1}/2</Text>
              </View>
            <TouchableOpacity  style={QuestionStyles.buttonNextQ1, {top:'24%',left:'41%'}} 
                onPress = {() => this.updataScore1(select,Next)}    
                onPressOut = {this.reset} >
          <View style={{flexDirection : "row"}} >
              <Text style={QuestionStyles.next}>Next</Text>
              <Image style={{left:-15, top: 3}} source={require('./assets/next.png')} ></Image>
            </View>
        </TouchableOpacity>
          </View>
          <View style={AgeStyles.head}>
            <Image source={require('./assets/whitelogo.png')} style={AgeStyles.logo}></Image>
          </View> 
    </SafeAreaView >
    );  
      }
    if(checkmode == 2){ //4 choice
      return (  
        <SafeAreaView style={QuestionStyles.container}>
           <View style={AgeStyles.frame}>
           <TouchableOpacity style={SuggestionStyles.circle} onPress = {() => this.playSound(Next)}
           >
                <Image source={require('./assets/talk.png')} style={SuggestionStyles.none}></Image>
                <Text style={QuestionStyles.smallText}>ฟังก์ชันช่วยอ่าน</Text>
           </TouchableOpacity>
              <View style={QuestionStyles.boxoftext}>
        <Text style={QuestionStyles.textinbox} > {this.NextQ(Next)}</Text>
              </View>
              <TouchableOpacity  activeOpacity={10} style={this.state.gray1pressStatus? QuestionStyles.button1Gray: QuestionStyles.button1} 
              onPress = {() => this.selectQ2C1()} onPressOut = {this.reset}>
                <View style={{ alignItems: "center", top: 2 }}>
                  <Text style={AgeStyles.text}>ไม่เลย</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={10} style={this.state.gray2pressStatus? QuestionStyles.button2Gray: QuestionStyles.button2} 
              onPress = {() => this.selectQ2C2()} onPressOut = {this.reset}>
                <View style={{ alignItems: "center", top: 2 }}>
                  <Text style={AgeStyles.text}>นานๆครั้ง</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={QuestionStyles.button3}
              activeOpacity={10} style={this.state.gray3pressStatus? QuestionStyles.button3Gray: QuestionStyles.button3}
              onPress = {() => this.selectQ2C3()} onPressOut = {this.reset}>
                <View style={{ alignItems: "center", top: 2 }}>
                  <Text style={AgeStyles.text}>บ่อยๆ</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={QuestionStyles.button4}
              activeOpacity={10} style={this.state.gray4pressStatus? QuestionStyles.button4Gray: QuestionStyles.button4}
              onPress = {() => this.selectQ2C4()} onPressOut = {this.reset}>
                <View style={{ alignItems: "center", top: 2 }}>
                  <Text style={AgeStyles.text}>ตลอดเวลา</Text>
                </View>
              </TouchableOpacity>
              <View style={QuestionStyles.buttonCount1} >
              <Text style={AgeStyles.textcountQ2}>{Next-1}/9</Text>
              </View>
              <TouchableOpacity  style={QuestionStyles.buttonNextQ2, {top:'12.8%', left:'41%'}}
              onPress = {() => this.updataScore2(select,Next)}    onPressOut = {this.reset} 
              >
            <View style={{flexDirection : "row"}} >
              <Text style={QuestionStyles.next}>Next</Text>
              <Image style={{left:-15, top: 3}} source={require('./assets/next.png')} ></Image>
            </View>
          </TouchableOpacity>
            </View>
            <View style={AgeStyles.head}>
              <Image source={require('./assets/whitelogo.png')} style={AgeStyles.logo}></Image>
            </View>
  </SafeAreaView >
  );
    }   
    if (checkmode == 3) { //
      return (  
        <SafeAreaView style={QuestionStyles.container}>
          <View style={AgeStyles.frame}>
          <TouchableOpacity style={SuggestionStyles.circle} onPress = {() => this.playSound(Next)}>
                <Image source={require('./assets/talk.png')} style={SuggestionStyles.none}></Image>
                <Text style={QuestionStyles.smallText}>ฟังก์ชันช่วยอ่าน</Text>
           </TouchableOpacity>
            <View style={QuestionStyles.boxoftext}>
      <Text style={QuestionStyles.textinbox} >{this.NextQ3(Next)}</Text>
              </View>
            <TouchableOpacity style={QuestionStyles.buttonQ3C1 } 
            activeOpacity={10} style={this.state.gray1pressStatus? QuestionStyles.buttonQ3C1Gray: QuestionStyles.buttonQ3C1}
            onPress = {() => this.selectQ3C1()} onPressOut = {this.reset} >
              <View style={{ alignItems: "center", top: 2 }}>
                <Text style={AgeStyles.textN2}>{adultdata[Next].choice1}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={QuestionStyles.buttonQ3C2}
            activeOpacity={10} style={this.state.gray2pressStatus? QuestionStyles.buttonQ3C2Gray: QuestionStyles.buttonQ3C2}
            onPress = {() => this.selectQ3C2()} onPressOut = {this.reset} >
              <View style={{ alignItems: "center", top: 2 }}>
                <Text style={AgeStyles.textN2}>{adultdata[Next].choice2}</Text>
              </View>
            </TouchableOpacity>
            <View style={QuestionStyles.buttonCount} >
      <Text style={AgeStyles.textcountQ2}>{Next-10}/9</Text>
              </View>
            <TouchableOpacity  style={QuestionStyles2.buttonNext, {top:'24.1%', left:'41%'}} 
                onPress = {() => this.updataScore3(select,Next)}    
                onPressOut = {this.reset} >
            <View style={{flexDirection : "row"}} >
              <Text style={QuestionStyles.next}>Next</Text>
              <Image style={{left:-15, top: 3}} source={require('./assets/next.png')} ></Image>
            </View>
        </TouchableOpacity>
          </View>
          <View style={AgeStyles.head}>
            <Image source={require('./assets/whitelogo.png')} style={AgeStyles.logo}></Image>
          </View> 
  </SafeAreaView >
  );
    }
    } 
    reset = () => {
      this.setState({
        counter: this.state.counter = 0 ,
      })
    } 
} 
const QuestionStyles = StyleSheet.create({
  buttonCount: {
    width: 132,
    height: 43,
    backgroundColor: "#A0CDCA",
    borderRadius: 5,
    top : '-48.5%',
    right : '-40%',
  },
  buttonCount1: {
    width: 132,
    height: 43,
    backgroundColor: "#A0CDCA",
    borderRadius: 5,
    top : '-59.8%',
    right : '-40%',
  },
    next: {
        left : -20,
        flexDirection : "row",
        fontSize: 25,
        color: "#585858",
    }, 
    squareButton: {
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "#A0CDCA",
        height: 165,
         width: 165,
        borderRadius: 5,
        alignItems: 'center',
        top: '20%',
        marginTop: 55
      },
      container: {
        flex: 1
      },
    text : {
      top: '200%',
      fontSize: 22,
      color: "black",
      textAlign: 'center'
    },
    textN3: {
      marginHorizontal : 15 ,
      textAlign: 'center',
      fontSize: 20,
      color: "white",
    },
    buttonCountQ1: {
      width: 132,
      height: 43,
      backgroundColor: "#A0CDCA",
      borderRadius: 5,
      top : '-52%',
      right : '-40%',
    },
    textinbox : {
      //top : '-20%',
      fontSize: 20,
      color: "#585858",
      textAlign: 'center',
    },
    textinboxQ3 : {
      fontSize: 22,
      color: "#585858",
      textAlign: 'center',
    },
    buttonCountQ2: {
      width: 132,
      height: 43,
      backgroundColor: "#A0CDCA",
      borderRadius: 5,
      top : '-64%',
      right : '-40%',
    },
    buttonQ3C1: {
      width: 136,
      height: 60,
      backgroundColor: "#A0CDCA",
      borderRadius: 5,
      top : '18%',
      justifyContent: 'center',
    },
    buttonQ3C1Gray: {
      width: 136,
      height: 60,
      backgroundColor: "#B7B7B7",
      borderRadius: 5,
      top : '18%',
      justifyContent: 'center',
    },
    buttonQ3C2: {
      width: 136,
      height: 60,
      backgroundColor: "#A091BC",
      borderRadius: 5,
      top : '20%',
      justifyContent: 'center',
    },
    buttonQ3C2Gray: {
      width: 136,
      height: 60,
      backgroundColor: "#B7B7B7",
      borderRadius: 5,
      top : '20%',
      justifyContent: 'center',
    },
    boxoftext: {
      //backgroundColor: "red",
      width: 313,
      height: 120,
      top: '18%',
      right:'0%',
      justifyContent: 'center',
    },
    button1: {
      width: 136,
      height: 48,
      backgroundColor: "#A091BC",
      top: '18%',
      right:'22%',
      borderRadius: 5,
    },
    button1Gray: {
      width: 136,
      height: 48,
      backgroundColor: "#B7B7B7",
      top: '18%',
      right:'22%',
      borderRadius: 5,
    },
    buttonQ1C1: {
      width: 136,
      height: 60,
      backgroundColor: "#8FC5C2",
      borderRadius: 5,
      top : '18%',
      justifyContent: 'center',
    },
    buttonQ1C1Gray: {
      width: 136,
      height: 60,
      backgroundColor: "#B7B7B7",
      borderRadius: 5,
      top : '18%',
      justifyContent: 'center',
    },
    buttonQ1C2: {
      width: 136,
      height: 60,
      backgroundColor: "#A091BC",
      borderRadius: 5,
      top : '20%',
      justifyContent: 'center',
    },
    buttonQ1C2Gray: {
      width: 136,
      height: 60,
      backgroundColor: "#B7B7B7",
      borderRadius: 5,
      top : '20%',
      justifyContent: 'center',
    },
    button2: {
      width: 136,
      height: 48,
      backgroundColor: "#72A9BD",
      top: '10.20%',
      left:'22%',
      borderRadius: 5,
    },
    button2Gray: {
      width: 136,
      height: 48,
      backgroundColor: "#B7B7B7",
      top: '10.20%',
      left:'22%',
      borderRadius: 5,
    },
    button3: {
      width: 136,
      height: 48,
      backgroundColor: "#8FC5C2",
      top: '13%',
      right:'22%',
      borderRadius: 5,
    },
    button3Gray: {
      width: 136,
      height: 48,
      backgroundColor: "#B7B7B7",
      top: '13%',
      right:'22%',
      borderRadius: 5,
    },
    button4: {
      width: 136,
      height: 48,
      backgroundColor: "#90BD99",
      top: '5.30%',
      left:'22%',
      borderRadius: 5,
    },
    button4Gray: {
      width: 136,
      height: 48,
      backgroundColor: "#B7B7B7",
      top: '5.30%',
      left:'22%',
      borderRadius: 5,
    },
    buttonNextQ1: {
      width: 136,
      height: 48,
      top: '20%',
      left:'35%',
    },
    buttonNextQ2: {
      width: 136,
      height: 48,
      top: '10%',
      left:'36%',
    },
    buttonNextonage: {
      width: 136,
      height: 48,
      top: '23%',
      left:'35%',
    },
    buttonNextquetion: {
      width: 136,
      height: 48,
      top: '5%',
      right: '-35%',
    },
    

})

//=====================================================================================================================//
import {oldData} from './filedata';
class  QuestionScreen2 extends React.Component {  
  constructor(props) {
    super(props);
    this.sound = new Array();
    this.sound[0] = new Sound('o1.mp3',Sound.MAIN_BUNDLE) 
    this.sound[1] = new Sound('o2.mp3',Sound.MAIN_BUNDLE) 
    this.sound[2] = new Sound('o3.mp3',Sound.MAIN_BUNDLE)
    this.sound[3] = new Sound('o4.mp3',Sound.MAIN_BUNDLE)
    this.sound[4] = new Sound('o5.mp3',Sound.MAIN_BUNDLE)
    this.sound[5] = new Sound('o6.mp3',Sound.MAIN_BUNDLE)
    this.sound[6] = new Sound('o7.mp3',Sound.MAIN_BUNDLE)
    this.sound[7] = new Sound('o8.mp3',Sound.MAIN_BUNDLE)
    this.sound[8] = new Sound('o9.mp3',Sound.MAIN_BUNDLE)
    this.sound[9] = new Sound('o10.mp3',Sound.MAIN_BUNDLE)
    this.sound[10] = new Sound('o11.mp3',Sound.MAIN_BUNDLE)
    this.sound[11] = new Sound('o12.mp3',Sound.MAIN_BUNDLE)
    this.sound[12] = new Sound('o13.mp3',Sound.MAIN_BUNDLE)
    this.sound[13] = new Sound('o14.mp3',Sound.MAIN_BUNDLE)
    this.sound[14] = new Sound('o15.mp3',Sound.MAIN_BUNDLE)
    this.sound[15] = new Sound('o16.mp3',Sound.MAIN_BUNDLE)
    this.sound[16] = new Sound('o17.mp3',Sound.MAIN_BUNDLE)
    this.sound[17] = new Sound('o18.mp3',Sound.MAIN_BUNDLE)
    this.sound[18] = new Sound('o19.mp3',Sound.MAIN_BUNDLE)
    this.sound[19] = new Sound('o20.mp3',Sound.MAIN_BUNDLE)
    this.sound[20] = new Sound('o21.mp3',Sound.MAIN_BUNDLE)
    this.sound[21] = new Sound('o22.mp3',Sound.MAIN_BUNDLE)
    this.sound[22] = new Sound('o23.mp3',Sound.MAIN_BUNDLE)
    this.sound[23] = new Sound('o24.mp3',Sound.MAIN_BUNDLE)
    this.sound[24] = new Sound('o25.mp3',Sound.MAIN_BUNDLE)
    this.sound[25] = new Sound('o26.mp3',Sound.MAIN_BUNDLE)
    this.sound[26] = new Sound('o27.mp3',Sound.MAIN_BUNDLE)
    this.sound[27] = new Sound('o28.mp3',Sound.MAIN_BUNDLE)
    this.sound[28] = new Sound('o29.mp3',Sound.MAIN_BUNDLE)
    this.sound[29] = new Sound('o30.mp3',Sound.MAIN_BUNDLE)
  }
  playSound(num){
    if(!this.state.on) {
        this.sound[num].play(); this.setState({on : true});
      }
      else{
        this.sound[num].stop(); this.setState({on : false});
      }
      
  }
  stopSound(num){
    this.sound[num].stop(); this.setState({on : false})
  }
   updataScore(i,j){
     this.stopSound(j);
      if(i == 1){
        this.resetGray();
        if(this.state.end!=true) scoreQ = scoreQ + oldData[j].score1;
        if( j == 29){
          this.setState({end:true})
          if(scoreQ>=0&&scoreQ<=12){ResultNumber = 6; AgeType = 1;}
          else if(scoreQ>=13&&scoreQ<=18){ResultNumber = 7; AgeType = 1;}
          else if(scoreQ>=19&&scoreQ<=24){ResultNumber = 8; AgeType = 1;}
          else if(scoreQ>=25&&scoreQ<=30){ResultNumber = 9; AgeType = 1;}
          this.props.navigation.navigate('Result')
        }
        else{Next++}; select=0
      }
      if(i == 2){
        this.resetGray(); 
        if(this.state.end!=true) scoreQ = scoreQ + oldData[j].score2;
        if( j == 29 ){
          this.setState({end:true})
          if(scoreQ>=0&&scoreQ<=12){ResultNumber = 6; AgeType = 1;}
          else if(scoreQ>=13&&scoreQ<=18){ResultNumber = 7; AgeType = 1;}
          else if(scoreQ>=19&&scoreQ<=24){ResultNumber = 8; AgeType = 1;}
          else if(scoreQ>=25&&scoreQ<=30){ResultNumber = 9; AgeType = 1;}
          this.props.navigation.navigate('Result')}
        else{Next++}; select=0
      }
   }
   NextQ(i){
    var show ;
      show = oldData[i].q
      return show}
   resetGray (){
    this.setState({
      gray1pressStatus:false,
      gray2pressStatus:false,
    })
   }
   select1(){
    select = 1
    this.setState({
      gray1pressStatus:true,
      gray2pressStatus:false,
    })
   }
   select2() {
    select = 2
    this.setState({
      gray1pressStatus:false,
      gray2pressStatus:true,
    })
   }
   state = {
    select: 0,
    end:false,
    gray1pressStatus:false,
    gray2pressStatus:false,
    on : false, 
  }
  render() {  
    const counter = this.state.counter;
      return (  
        <SafeAreaView style={QuestionStyles.container}>
          <View style={AgeStyles.frame}>
          <TouchableOpacity onPress = {() => this.playSound(Next)}
            style={SuggestionStyles.circle} >
                <Image source={require('./assets/talk.png')} style={SuggestionStyles.none}></Image>
                <Text style={QuestionStyles.smallText}>ฟังก์ชันช่วยอ่าน</Text>
           </TouchableOpacity>
            
            <View style={QuestionStyles.boxoftext}>
      <Text style={QuestionStyles.textinbox} >{this.NextQ(Next)}</Text>
              </View>
            <TouchableOpacity activeOpacity={10} style={this.state.gray1pressStatus? QuestionStyles2.button1Gray: QuestionStyles2.button1 } 
            onPress = {() => this.select1()} onPressOut = {this.reset} >
              <View style={{ alignItems: "center", top: 2 }}>
                <Text style={AgeStyles.textN2}>{oldData[Next].choice1}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={10} style={this.state.gray2pressStatus? QuestionStyles2.button2Gray: QuestionStyles2.button2 } 
            onPress = {() => this.select2()} onPressOut = {this.reset} >
              <View style={{ alignItems: "center", top: 2 }}>
                <Text style={AgeStyles.textN2}>{oldData[Next].choice2}</Text>
              </View>
            </TouchableOpacity>
            <View style={QuestionStyles2.buttonCount} >
      <Text style={AgeStyles.textcountQ2}>{Next+1}/30</Text>
              </View>
            <TouchableOpacity  style={QuestionStyles2.buttonNext ,{top:'24%',left:'41%'}} 
                onPress = {() => this.updataScore(select,Next)}    
                onPressOut = {this.reset} >
            <View style={{flexDirection : "row"}} >
              <Text style={QuestionStyles.next}>Next</Text>
              <Image style={{left:-15, top: 3}} source={require('./assets/next.png')} ></Image>
            </View>
        </TouchableOpacity>
          </View>
          <View style={AgeStyles.head}>
            <Image source={require('./assets/whitelogo.png')} style={AgeStyles.logo}></Image>
          </View> 
  </SafeAreaView >
  );  
  }  
  reset = () => {
    this.setState({
      counter: this.state.counter = 0 ,
    })
  } 
} 
const QuestionStyles2 = StyleSheet.create({
  squareButton: {
      textAlign: "center",
      justifyContent: "center",
      backgroundColor: "#A0CDCA",
      height: 165,
       width: 165,
      borderRadius: 5,
      alignItems: 'center',
      top: '20%',
      marginTop: 55,
      shadowColor: "black",
      shadowRadius: 50,
      shadowOpacity: 60,
    },
    container: {
      flex: 1
    },
    button1: {
      width: 136,
      height: 60,
      backgroundColor: "#A0CDCA",
      borderRadius: 5,
      top : '18%',
      justifyContent: 'center',
    },
    button1Gray: {
      width: 136,
      height: 60,
      backgroundColor: "#B7B7B7",
      borderRadius: 5,
      top : '18%',
      justifyContent: 'center',
    },
    button2: {
      width: 136,
      height: 60,
      backgroundColor: "#A091BC",
      borderRadius: 5,
      top : '20%',
      justifyContent: 'center',
    },
    button2Gray: {
      width: 136,
      height: 60,
      backgroundColor: "#B7B7B7",
      borderRadius: 5,
      top : '20%',
      justifyContent: 'center',
    },
    buttonCount: {
      width: 132,
      height: 43,
      backgroundColor: "#A0CDCA",
      borderRadius: 5,
      top : '-48.5%',
      right : '-40%',
    },
    buttonCountQ1: {
      width: 132,
      height: 43,
      backgroundColor: "#A0CDCA",
      borderRadius: 5,
      top : '-68%',
      right : '-40%',
    },
    buttonNext: {
      width: 136,
      height: 48,
      top: '20.5%',
      left:'36%',
    },
})

//=======================================================================================================================//
import {youngdata} from './filedata1';
class QuestionScreen3 extends React.Component {  
   updataScore(i,j){
     this.stopSound(j)
    this.resetGray();
      if(i == 1){
        if(this.state.end!=true) scoreQ = scoreQ + youngdata[j].score1; select=0; 
        if( j == 26 ){
          this.setState({end:true})
          if(scoreQ<=15){ResultNumber = 0; AgeType = 2;}
          else if(scoreQ>=16){ ResultNumber = 1; AgeType = 2;}
          this.props.navigation.navigate('Result')
        }
        else Next++;
      }
      if(i == 2){
        if(this.state.end!=true) scoreQ = scoreQ + youngdata[j].score2; select=0; 
        if( j == 26 ){
          this.setState({end:true})
          if(scoreQ<=15){ResultNumber = 0; AgeType = 2;}
          else if(scoreQ>=16){ ResultNumber = 1; AgeType = 2;}
          this.props.navigation.navigate('Result')
        }
        else{Next++}
      }
      if(i == 3){
        if(this.state.end!=true) scoreQ = scoreQ + youngdata[j].score3; select=0; 
        if( j == 26 ){
          this.setState({end:true})
          if(scoreQ<=15){ResultNumber = 0; AgeType = 2;}
          else if(scoreQ>=16){ ResultNumber = 1; AgeType = 2;}
          this.props.navigation.navigate('Result')
        }
        else{Next++}
      }
   }
   constructor(props) {
    super(props);
    this.sound = new Array();
    this.sound[0] = new Sound('y1.mp3',Sound.MAIN_BUNDLE) 
    this.sound[1] = new Sound('y2.mp3',Sound.MAIN_BUNDLE) 
    this.sound[2] = new Sound('y3.mp3',Sound.MAIN_BUNDLE)
    this.sound[3] = new Sound('y4.mp3',Sound.MAIN_BUNDLE)
    this.sound[4] = new Sound('y5.mp3',Sound.MAIN_BUNDLE)
    this.sound[5] = new Sound('y6.mp3',Sound.MAIN_BUNDLE)
    this.sound[6] = new Sound('y7.mp3',Sound.MAIN_BUNDLE)
    this.sound[7] = new Sound('y8.mp3',Sound.MAIN_BUNDLE)
    this.sound[8] = new Sound('y9.mp3',Sound.MAIN_BUNDLE)
    this.sound[9] = new Sound('y10.mp3',Sound.MAIN_BUNDLE)
    this.sound[10] = new Sound('y11.mp3',Sound.MAIN_BUNDLE)
    this.sound[11] = new Sound('y12.mp3',Sound.MAIN_BUNDLE)
    this.sound[12] = new Sound('y13.mp3',Sound.MAIN_BUNDLE)
    this.sound[13] = new Sound('y14.mp3',Sound.MAIN_BUNDLE)
    this.sound[14] = new Sound('y15.mp3',Sound.MAIN_BUNDLE)
    this.sound[15] = new Sound('y16.mp3',Sound.MAIN_BUNDLE)
    this.sound[16] = new Sound('y17.mp3',Sound.MAIN_BUNDLE)
    this.sound[17] = new Sound('y18.mp3',Sound.MAIN_BUNDLE)
    this.sound[18] = new Sound('y19.mp3',Sound.MAIN_BUNDLE)
    this.sound[19] = new Sound('y20.mp3',Sound.MAIN_BUNDLE)
    this.sound[20] = new Sound('y21.mp3',Sound.MAIN_BUNDLE)
    this.sound[21] = new Sound('y22.mp3',Sound.MAIN_BUNDLE)
    this.sound[22] = new Sound('y23.mp3',Sound.MAIN_BUNDLE)
    this.sound[23] = new Sound('y24.mp3',Sound.MAIN_BUNDLE)
    this.sound[24] = new Sound('y25.mp3',Sound.MAIN_BUNDLE)
    this.sound[25] = new Sound('y26.mp3',Sound.MAIN_BUNDLE)
    this.sound[26] = new Sound('y27.mp3',Sound.MAIN_BUNDLE)
  }
  playSound(num){
    if(!this.state.on) {
        this.sound[num].play(); this.setState({on : true});
      }
      else{
        this.sound[num].stop(); this.setState({on : false});
      }
      
  }
  stopSound(num){
    this.sound[num].stop(); this.setState({on : false})
  }
   NextQ(i,j){
     var show
    if (j == 1 ){ show = youngdata[i].choice1; return show}
    if (j == 2 ){ show = youngdata[i].choice2; return show}
    if (j == 3 ){ show = youngdata[i].choice3; return show}
   }
   select1(){
    select = 1
    this.setState({
      gray1pressStatus:true,
      gray2pressStatus:false,
      gray3pressStatus:false,
    })
   }
   select2() {
    select = 2
    this.setState({
      gray1pressStatus:false,
      gray2pressStatus:true,
      gray3pressStatus:false,
    })
   }
   select3() {
    select = 3
    this.setState({
      gray1pressStatus:false,
      gray2pressStatus:false,
      gray3pressStatus:true,
    })
   }
   state = {
    select: 0,
    end:false,
    gray1pressStatus:false,
    gray2pressStatus:false,
    gray3pressStatus:false,
    on : false, 
  }
  resetGray (){
    this.setState({
      gray1pressStatus:false,
      gray2pressStatus:false,
      gray3pressStatus:false,
    })
   }
  render() {  
    const counter = this.state.counter;
      return (  
        <SafeAreaView style={QuestionStyles.container}>
          <View style={AgeStyles.frame}>
          <TouchableOpacity onPress = {() => this.playSound(Next)}
            style={SuggestionStyles.circle} >
                <Image source={require('./assets/talk.png')} style={SuggestionStyles.none}></Image>
                <Text style={QuestionStyles.smallText}>ฟังก์ชันช่วยอ่าน</Text>
           </TouchableOpacity>
            <View style={QuestionStyles3.boxoftext}>
              <Text style={QuestionStyles3.textinboxQ3} >เลือกประโยคที่ตรงกับความรู้สึกของท่านมากที่สุดใน 2 สัปดาห์ที่ผ่านมา</Text>
            </View>
            <TouchableOpacity activeOpacity={10} style={this.state.gray1pressStatus? QuestionStyles3.button1Gray: QuestionStyles3.button1 } 
              onPress={() => this.select1()} onPressOut={this.reset} >
              <View style={{ alignItems: "center", top: 2 }}>
      <Text style={QuestionStyles3.textN2}>{this.NextQ(Next,1)}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={10} style={this.state.gray2pressStatus? QuestionStyles3.button2Gray: QuestionStyles3.button2 }
              onPress={() => this.select2()} onPressOut={this.reset} >
              <View style={{ alignItems: "center", top: 2 }}>
                <Text style={QuestionStyles3.textN2}>{this.NextQ(Next,2)}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={10} style={this.state.gray3pressStatus? QuestionStyles3.button3Gray: QuestionStyles3.button3 }
              onPress={() => this.select3()} onPressOut={this.reset} >
              <View style={{ alignItems: "center", top: 2 }}>
                <Text style={QuestionStyles3.textN2}>{this.NextQ(Next,3)}</Text>
              </View>
            </TouchableOpacity>
            <View style={QuestionStyles3.buttonCount} >
      <Text style={AgeStyles.textcountQ2}>{Next+1}/27</Text>
            </View>
            <TouchableOpacity style={QuestionStyles3.buttonNext, {top:'14.6%',left:'41%'}} 
                  onPress={() => this.updataScore(select, Next)}
                  onPressOut={this.reset} >
            <View style={{flexDirection : "row"}} >
              <Text style={QuestionStyles.next}>Next</Text>
              <Image style={{left:-15, top: 3}} source={require('./assets/next.png')} ></Image>
            </View>
            </TouchableOpacity>
            
          </View>
          <View style={AgeStyles.head}>
            <Image source={require('./assets/whitelogo.png')} style={AgeStyles.logo}></Image>
          </View>
        </SafeAreaView >
  );  
  }  
  reset = () => {
    this.setState({
      counter: this.state.counter = 0 ,
    })
  } 
} 
const QuestionStyles3 = StyleSheet.create({
  squareButton: {
      textAlign: "center",
      justifyContent: "center",
      backgroundColor: "#A0CDCA",
      height: 165,
       width: 165,
      borderRadius: 5,
      alignItems: 'center',
      top: '20%',
      marginTop: 55,
      shadowColor: "black",
      shadowRadius: 50,
      shadowOpacity: 60,
    },
    textN2: {
      textAlign: 'center',
      fontSize: 18,
      color: "white",
    },
    boxoftext: {
      width: 313,
      height: 120,
      top: '15%',
      right:'0%',
      justifyContent: 'center',
    },
    container: {
      flex: 1
    },
    textinboxQ3 : {
      fontSize: 20,
      color: "#585858",
      textAlign: 'center',
    },
    button1: {
      width: 278,
      height: 60,
      backgroundColor: "#A0CDCA",
      borderRadius: 5,
      top : '13%',
      justifyContent: 'center',
    },
    button1Gray: {
      width: 278,
      height: 60,
      backgroundColor: "#B7B7B7",
      borderRadius: 5,
      top : '13%',
      justifyContent: 'center',
    },
    button2: {
      width: 278,
      height: 60,
      backgroundColor: "#87B3CC",
      borderRadius: 5,
      top : '15%',
      justifyContent: 'center',
    },
    button2Gray: {
      width: 278,
      height: 60,
      backgroundColor: "#B7B7B7",
      borderRadius: 5,
      top : '15%',
      justifyContent: 'center',
    },
    button3: {
      width: 278,
      height: 60,
      backgroundColor: "#A091BC",
      borderRadius: 5,
      top : '17%',
      justifyContent: 'center',
    },
    button3Gray: {
      width: 278,
      height: 60,
      backgroundColor: "#B7B7B7",
      borderRadius: 5,
      top : '17%',
      justifyContent: 'center',
    },
    buttonCount: {
      width: 132,
      height: 43,
      backgroundColor: "#A0CDCA",
      borderRadius: 5,
      top : '-58%',
      right : '-40%',
    },
    buttonCountQ1: {
      width: 132,
      height: 43,
      backgroundColor: "#A0CDCA",
      borderRadius: 5,
      top : '-68%',
      right : '-40%',
    },
    buttonNext: {
      width: 136,
      height: 48,
      top: '12%',
      left:'36%',
    },
})
//==================================================== Result ==========================================================
import {suggestionData} from './suggestion';

class ResultScreen extends React.Component {
  state = {
    result : "",
  }
  constructor(props) {
    super(props);
    this.state.result=suggestionData[ResultNumber].title;
  }
 
  onPressSuggestion() {
    this.props.navigation.navigate('Suggestion')
  }
  onPressSearchConsult() {
    this.props.navigation.navigate('SearchConsult')
  }
  onPressHome() {
    this.props.navigation.navigate('Home')
  }
  render() {
    
    return (
      <SafeAreaView style={ResultStyles.container}>
        <View style={ResultStyles.frame}>
          <View style={ResultStyles.circle}>
            <Image source={require('./assets/10.png')} style={{ top: '3%' }}></Image>
          </View>
          <View style={ResultStyles.textBox}>
              <Text style={ResultStyles.resultText}>"{this.state.result}"</Text>
          </View>
          <TouchableOpacity style={ResultStyles.squareButton} onPress={() => this.onPressSuggestion()}>
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: "#FFFFFF", fontSize: 20, }}>คำแนะนำการปฏิบัติตัว</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={ResultStyles.squareButton} onPress={() => this.onPressSearchConsult()}>
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: "#FFFFFF", fontSize: 20, }}>ค้นหาที่ปรึกษา</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={ResultStyles.blankButton} onPress={() => this.onPressHome()}>
            <View style={{ alignItems: "center" }}>
              <Image source={require('./assets/home.png')} style={ResultStyles.none}></Image>
              <Text style={{ color: "black", fontSize: 15, }}>BACK TO HOME</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={ResultStyles.head}>
          <Image source={require('./assets/whitelogo.png')} style={ResultStyles.logo}></Image>
        </View>
      </SafeAreaView >
    );
  }
}

const ResultStyles = StyleSheet.create({
  logo: {
    position: "relative",
    marginLeft: 30,
  },
  head: {
    position: "absolute",
    height: '14%',
    width: '100%',
    backgroundColor: "#60A8A4",
    alignItems: "center",
    justifyContent: "center",
  },
  squareButton: {
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#7FB5B3",
    height: 60,
    width: 233,
    borderRadius: 5,
    alignItems: 'center',
    top: '20%',
    marginTop: 10,
  },
  resultText:{
    fontSize:20,
    marginHorizontal:10,
    alignSelf:"center",
    textAlign:"center",
    alignItems:"center"
  },
  circle: {
    justifyContent: "center",
    backgroundColor: "#DFEEEE",
    height: 164,
    width: 164,
    borderRadius: 100,
    alignItems: 'center',
    top: '17%',
  },
  frame: {
    flex: 1,
    marginHorizontal: 18,
    marginVertical: 18,
    borderWidth: 1,
    borderColor: "#969696",
    alignItems: "center"
  },
  textBox: {
    alignContent:"center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#707070",
    height:90,
    width: 260,
    borderRadius: 5,
    top: '19%',
    marginTop: 10,
    alignItems:"center"
  },
  blankButton: {
    textAlign: "center",
    justifyContent: "center",
    height: 49,
    width: 255,
    borderRadius: 5,
    alignItems: 'center',
    top: '22%',
    marginTop: 10,
    shadowColor: "black",
    shadowRadius: 50,
    shadowOpacity: 60,
  },
  container: {
    flex: 1,
  },
})
//==================================================== Suggestion ======================================================



var soundName
class SuggestionScreen extends React.Component {
  state = {
    suggest : "",
    suggest2:"",
    type : AgeType,
    on : false,
    currentSound : 0 
  }

  constructor(props) {
    super(props);
    this.sound = new Array();
    var k,n;
    for(k=0;k<10;k++){
      n=k+1
      soundName = 'suggestion'+n+".mp3"
      this.sound[k] = new Sound(soundName,Sound.MAIN_BUNDLE) 
    }
    if(AgeType==1) this.state.suggest=suggestionData[ResultNumber].detail;
    else if(AgeType==2){
      this.state.suggest=suggestionData[ResultNumber].details;
      this.state.suggest2=suggestionData[ResultNumber].details2;
      this.state.type=AgeType
    }
    
    
  }

  
  componentWillUnmount() {
    if(this.state.on) this.playSound(this.state.currentSound)
  }

  playSound(num){
      if(!this.state.on) {
        this.sound[num].play(); this.setState({on : true,currentSound : num});
      }
      else{
        this.sound[this.state.currentSound].stop(); this.setState({on : false});
      }
  }
 
  render() {
    if(this.state.type==1){
      return (
        <SafeAreaView style={SuggestionStyles.container}>
          <View style={SuggestionStyles.frame}>
          <ScrollView style={SuggestionStyles.scrollView}>
            <View style={SuggestionStyles.inner}>
            
              <TouchableOpacity style={SuggestionStyles.circle} onPress={() => this.playSound(ResultNumber)}>
                <Image source={require('./assets/talk.png')} style={SuggestionStyles.none}></Image>
                <Text style={SuggestionStyles.smallText}>ฟังก์ชันช่วยอ่าน</Text>
              </TouchableOpacity>
            <View style={{ alignItems: "center",marginTop:'38%' }}>
              <Text style={SuggestionStyles.text}>คำแนะนำการปฏิบัติตัว</Text>
              <Text style={SuggestionStyles.detailText}>
                {this.state.suggest}
              </Text>
            </View>
            </View>
          </ScrollView>
          </View>
          <View style={SuggestionStyles.head}>
            <Image source={require('./assets/whitelogo.png')} style={SuggestionStyles.logo}></Image>
          </View>
        </SafeAreaView>
      );
    }
    else if(this.state.type==2){
      return (
        <SafeAreaView style={SuggestionStyles.container}>
          <View style={SuggestionStyles.frame}>
          <ScrollView style={SuggestionStyles.scrollView}>
            <View style={SuggestionStyles.inner}>
              <TouchableOpacity style={SuggestionStyles.circle} onPress={() => this.playSound(ResultNumber)}>
                <Image source={require('./assets/talk.png')} style={SuggestionStyles.none}></Image>
                <Text style={SuggestionStyles.smallText}>ฟังก์ชันช่วยอ่าน</Text>
              </TouchableOpacity>
            <View style={{ alignItems: "center",marginTop:'38%' }}>
              <Text style={SuggestionStyles.text}>คำแนะนำการปฏิบัติตัว</Text>
              <Text style={SuggestionStyles.detailText}>{this.state.suggest}</Text>
              <Text style={SuggestionStyles.text}>คำแนะนำสำหรับผู้ปกครอง</Text>
              <Text style={SuggestionStyles.detailText}>{this.state.suggest2}</Text>
            </View>
            </View>
          </ScrollView>
          </View>
          <View style={SuggestionStyles.head}>
            <Image source={require('./assets/whitelogo.png')} style={SuggestionStyles.logo}></Image>
          </View>
        </SafeAreaView>
      );
    }
  }
}
const SuggestionStyles = StyleSheet.create({
  smallText:{
    
    fontSize:14,
    color:"#2A2A2A",
  },
  inner:{
    alignContent:"center",
    alignItems:"center",
    marginBottom:20
  },
  circle: {
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#DFEEEE",
    height: 164,
    width: 164,
    borderRadius: 100,
    alignItems: 'center',
    top: 113,
    shadowColor: "black",
    shadowRadius: 100,
    shadowOpacity: 60,
  },
  frame: {
    flex: 1,
    marginHorizontal: 18,
    marginVertical: 18,
    borderWidth: 1,
    borderColor: "#969696",
    alignItems: "center",
  },
  detailText:{
    fontSize: 21,
    color: "black",
    marginTop: '5%',
    marginHorizontal: '5%',
  },
  text: {
    fontSize: 24,
    color: "#4C8884",
    textDecorationLine:"underline",
    fontWeight: 'bold'
  },
  textBox: {
    textAlign: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#707070",
    height: 49,
    width: 255,
    borderRadius: 5,
    alignItems: 'center',
    top: '18%',
    marginTop: 10,
    shadowColor: "black",
    shadowRadius: 50,
    shadowOpacity: 60,
  },
  blankButton: {
    textAlign: "center",
    justifyContent: "center",
    height: 49,
    width: 255,
    borderRadius: 5,
    alignItems: 'center',
    top: '25%',
    marginTop: 10,
    shadowColor: "black",
    shadowRadius: 50,
    shadowOpacity: 60,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 0.84,
    
  },
  logo: {
    left:'-1%',
    top:'3%',
    position: "relative",
    marginLeft: 30,
  },
  none: {
    position: "relative",
    top:-1
  },
  head: {
    position:"absolute",
    flex: 0.16,
    height: '14%',
    width: '100%',
    backgroundColor: "#60A8A4",
    alignItems: "center",
    justifyContent: "center",
  }
})
//======================================================== ConsultantScreen =========================================== 
//https://www.npmjs.com/package/@react-native-community/picker
var currentState = "เลือกภูมิภาค"
var stateNum = 1000
class ConsultantScreen extends React.Component {
  state = {
    states: 'เลือกภูมิภาค',
    search : false
  };
  static navigationOptions = {
    title: '',
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  updateState = (states) => {
    this.setState({ states: states })
    currentState = states
    switch (currentState) {
      case "": stateNum = 1000; this.setState({search: false}) ; break;
      case "เลือกภูมิภาค": stateNum = 1000; this.setState({search: false});  break;
      case "ภาคกลาง": stateNum = 0; this.setState({search: true}); break;
      case "ภาคเหนือ": stateNum = 1; this.setState({search: true}); break;
      case "ภาคตะวันออกเฉียงเหนือ": stateNum = 2; this.setState({search: true}); break;
      case "ภาคตะวันออก": stateNum = 3; this.setState({search: true}); break;
      case "ภาคใต้": stateNum = 4; this.setState({search: true}); break;
    }
  }
  search() {
    if (this.state.search){ this.props.navigation.navigate('ConsultList')}
  }

  render() {
    return (

      <SafeAreaView style={ConsultStyles.container}>
        <View style={ConsultStyles.frame}>
          <Text style={ConsultStyles.topText}>ค้นหาที่ปรึกษา</Text>
          <View style={ConsultStyles.circle}>
            <Image source={require('./assets/man.png')} style={ConsultStyles.imageIcon}></Image>
          </View>
          <View style={ConsultStyles.topPicker1}>
            <Picker
              itemTextStyle={{ fontSize: 30 }}
              mode="dialog"
              itemStyle={ConsultStyles.pickerText}
              selectedValue={this.state.states}
              style={ConsultStyles.pickerStyle}
              onValueChange={this.updateState}>

              <Picker.Item label={this.state.states} value="เลือกภูมิภาค" />
              <Picker.Item label="ภาคกลาง" value="ภาคกลาง" />
              <Picker.Item label="ภาคเหนือ" value="ภาคเหนือ" />
              <Picker.Item label="ภาคตะวันออกเฉียงเหนือ" value="ภาคตะวันออกเฉียงเหนือ" />
              <Picker.Item label="ภาคตะวันออก" value="ภาคตะวันออก" />
              <Picker.Item label="ภาคใต้" value="ภาคใต้" />
            </Picker>

          </View>

          <TouchableOpacity style={ConsultStyles.searchButton} onPress={() => this.search()}>
            <View style={{ alignItems: "center", top: 3 }}>
              <Text style={AgeStyles.text} >Search</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={AgeStyles.head}>
          <Image source={require('./assets/whitelogo.png')} style={AgeStyles.logo}></Image>
        </View>
      </SafeAreaView >
    );
  }
}

const ConsultStyles = StyleSheet.create({
  imageIcon: {
    top: -5
  },
  circle: {
    justifyContent: "center",
    backgroundColor: "#EFEFEF",
    height: 164,
    width: 164,
    borderRadius: 100,
    alignItems: 'center',
    top: '15%',
  },
  searchButton: {
    top: '34%',
    width: 150,
    height: 50,
    backgroundColor: "#7FB5B3",
    borderRadius: 5
  },
  topPicker1: {
    top: '55%',
    color: "pink",
    width: 230,
    height: 50,
    backgroundColor: "#DFEEEE",
    position: "relative",
    flexDirection: 'row',
    justifyContent: "center",
    borderRadius: 5
  },
  topPicker2: {
    top: '52%',
    color: "pink",
    width: 190,
    height: 50,
    backgroundColor: "#DFEEEE",
    position: "relative",
    flexDirection: 'row',
    justifyContent: "center",
    borderRadius: 5
  },
  pickerStyle: {
    height: 50,
    width: 200,
  },
  topText: {
    top: '50%',
    fontSize: 25
  },
  squareButton: {
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#A0CDCA",
    height: 165,
    width: 165,
    borderRadius: 5,
    alignItems: 'center',
    top: '20%',
    marginTop: 55,
    shadowColor: "black",
    shadowRadius: 50,
    shadowOpacity: 60,
  },
  frame: {
    flex: 1,
    marginHorizontal: 18,
    marginVertical: 18,
    borderWidth: 1,
    borderColor: "#969696",
    alignItems: "center",
  },
  container: {
    flex: 1
  },

  head: {
    flex: 0.16,
    height: '14%',
    width: '100%',
    backgroundColor: "#60A8A4",
    alignItems: "center",
    justifyContent: "center",
  }
})
//=============================================== ConsultListScreen =================================
const DATA = [
[{
    title: "ภาคกลาง",
    data: ["สายด่วนสุขภาพจิต\nให้คำปรึกษาได้ฟรีตลอด 24 ชั่วโมง\nโทร : 1323",
        "สถาบันจิตเวชศาสตร์สมเด็จเจ้าพระยา\nจังหวัด : กรุงเทพมหานคร\nโทร : 0-2441-6100",
        "สถาบันราชานุกูล\nจังหวัด : กรุงเทพมหานคร\nโทร : 0-2248-8900",
        "สถาบันกัลยาณ์ราชนครินทร์\nจังหวัด : กรุงเทพมหานคร\nโทร : 0-2441-6100",
        "สถาบันสุขภาพจิตเด็กและวัยรุ่นราชนครินทร์\nจังหวัด : กรุงเทพมหานคร\nโทร : 0-2248-8999",
        "โรงพยาบาลยุวประสาทไวทโยปถัมภ์\nจังหวัด : สมุทรปราการ\nโทร : 0-2384-3381-3",
        "โรงพยาบาลศรีธัญญา\nจังหวัด : นนทบุรี\nโทร : 0-2528-7800",
        "โรงพยาบาลจิตเวชนครสวรรค์ราชนครินทร์\nจังหวัด : นครสวรรค์\nโทร : โทร : 056-219-444",
    ]
}],
[{
    title: "ภาคเหนือ",
    data: ["สายด่วนสุขภาพจิต\nให้คำปรึกษาได้ฟรีตลอด 24 ชั่วโมง\nโทร : 1323",
        "โรงพยาบาลสวนปรุง\nจังหวัด : เชียงใหม่\nโทร : 053-908500",
        "สถาบันพัฒนาการเด็กราชนครินทร์\nจังหวัด : เชียงใหม่\nโทร : 053-908300",
    ]
}],
[
{
    title: "ภาคตะวันออกเฉียงเหนือ",
    data: ["สายด่วนสุขภาพจิต\nให้คำปรึกษาได้ฟรีตลอด 24 ชั่วโมง\nโทร : 1323",
        "โรงพยาบาลจิตเวชเลยราชนครินทร์\nจังหวัด : เลย\nโทร : 042-808100",
        "โรงพยาบาลจิตเวชนครพนมราชนครินทร์\nจังหวัด : นครพนม\nโทร : 042-539000",
        "โรงพยาบาลพระศรีมหาโพธิ์\nจังหวัด : อุบลราชธานี\nโทร : 045-352500",
        "โรงพยาบาลจิตเวชขอนแก่นราชนครินทร์\nจังหวัด : ขอนแก่น\nโทร : 043-209999",
        "สถาบันสุขภาพจิตเด็กและวัยรุ่นภาคตะวันออกเฉียงเหนือ\nจังหวัด : ขอนแก่น\nโทร : 043-910770–1",
        "โรงพยาบาลจิตเวชนครราชสีมาราชนครินทร์\nจังหวัด : นครราชสีมา\nโทร : 044-233999",
    ]
}],
[{
    title: "ภาคตะวันออก",
    data: ["สายด่วนสุขภาพจิต\nให้คำปรึกษาได้ฟรีตลอด 24 ชั่วโมง\nโทร : 1323",
        "โรงพยาบาลจิตเวชสระแก้วราชนครินทร์\nจังหวัด : สระแก้ว\nโทร : 037-262-995-8",
    ]
}],
[{
    title: "ภาคใต้",
    data: ["สายด่วนสุขภาพจิต\nให้คำปรึกษาได้ฟรีตลอด 24 ชั่วโมง\nโทร : 1323",
        "โรงพยาบาลสวนสราญรมย์\nจังหวัด : สุราษฎร์ธานี\nโทร : 077-916500",
        "สถาบันสุขภาพจิตเด็กและวัยรุ่นภาคใต้\nจังหวัด : สุราษฎร์ธานี\nโทร : 077-310688",
        "โรงพยาบาลจิตเวชสงขลาราชนครินทร์\nจังหวัด : สงขลา\nโทร : 074-317400",
    ]
}],
];


//import {ฏฃ} from './SearchConsult';
const Item = ({ title }) => (
  <View style={ConsultListStyle.item}>
    <Text style={ConsultListStyle.consultantText}>{title}</Text>
  </View>
);

class ConsultListScreen extends React.Component {
  render() {
    return (

      <SafeAreaView style={ConsultListStyle.container}>
        <View style={ConsultListStyle.head}>
          <Image source={require('./assets/whitelogo.png')} style={ConsultListStyle.logo}></Image>
        </View>
        <SectionList
          style={ConsultListStyle.SectionList}
          sections={DATA[stateNum]}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={ConsultListStyle.text}>{title}</Text>
          )}
        />
      </SafeAreaView >

    );
  }
}

const ConsultListStyle = StyleSheet.create({
  headText: {
    marginVertical: 15,
    fontSize: 22,
    alignSelf: "center"
  },
  consultantText: {
    fontSize: 18
  },

  item: {
    backgroundColor: "#F0F0F0",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 18
  },
  container: {
    flex: 1
  },
  SectionList: {
    flex: 0.84,

  },
  head: {
    flex: 0.16,
    height: '14%',
    width: '100%',
    backgroundColor: "#60A8A4",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginLeft: '5%',
    marginTop: '2%'
  },
  text: {
    top : 12,
    bottom : 10,
    alignSelf: "center",
    fontSize: 24,
    color: "#4C8884",
    textDecorationLine:"underline",
    fontWeight: 'bold'
  },
})




//================================================================== Diary ===========================================
import { DiaryData } from './DiaryData';
class DiaryScreen extends React.Component {
  state = {
    modalVisible: false,
    modalTotal: false,
    noteInput: '',
    currentDay: 0,
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear()-2015,
    face: 0,
  }
  constructor(props) {
    super(props);
    this.data = DiaryData
    this.loadData()
    this.totalFace = [0,0,0,0,0];
  }
  
  countTotalFace(){
    var C=0 , i;
    this.totalFace = [0,0,0,0,0];
    for(i=0;i<31;i++){
      if(this.data[this.state.currentYear][this.state.currentMonth].picture[i].uri==require('./assets/smile.png')){ this.totalFace[0]+=1;} 
      else if(this.data[this.state.currentYear][this.state.currentMonth].picture[i].uri==require('./assets/normal.png')){ this.totalFace[1]+=1;} 
      else if(this.data[this.state.currentYear][this.state.currentMonth].picture[i].uri==require('./assets/sad.png')){ this.totalFace[2]+=1;} 
      else if(this.data[this.state.currentYear][this.state.currentMonth].picture[i].uri==require('./assets/angry.png')){ this.totalFace[3]+=1;} 
      else if(this.data[this.state.currentYear][this.state.currentMonth].picture[i].uri==require('./assets/love.png')){ this.totalFace[4]+=1;} 
    }
    console.log("end");
  }
  storeData = async () => {
    try { 
      var key = "c,"+ this.state.currentYear+"," + this.state.currentMonth+"," + this.state.currentDay
      var noteKey = "n,"+ this.state.currentYear+"," + this.state.currentMonth+"," + this.state.currentDay
      await AsyncStorage.setItem(key,String(this.state.face)); 
      await AsyncStorage.setItem(noteKey,this.data[this.state.currentYear][this.state.currentMonth].note[this.state.currentDay]); 
    } catch (error) {
    }
  };
  loadData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      var i
      var tempYear,tempMonth,tempDay; 
      for (i = 1;i<keys.length;i++) {
        value = await AsyncStorage.getItem(keys[i]);
        var temp = keys[i].split(",");
        tempYear = parseInt(temp[1])
        tempMonth = parseInt(temp[2])
        tempDay = parseInt(temp[3])
        if (temp[0]=="c") {
          if (value != null) {
            this.setState({ face: parseInt(value) })
            //console.log("This6666"+this.state.face);
            switch (this.state.face) {
              case 1: this.data[tempYear][tempMonth].picture[tempDay] = { uri: require('./assets/smile.png') }; break;
              case 2: this.data[tempYear][tempMonth].picture[tempDay] = { uri: require('./assets/normal.png') }; break;
              case 3: this.data[tempYear][tempMonth].picture[tempDay] = { uri: require('./assets/sad.png') }; break;
              case 4: this.data[tempYear][tempMonth].picture[tempDay] = { uri: require('./assets/angry.png') }; break;
              case 5: this.data[tempYear][tempMonth].picture[tempDay] = { uri: require('./assets/love.png') }; break;
            }
          }
        }else if(temp[0]=="n"){
         
          if (value != null) {
            this.data[tempYear][tempMonth].note[tempDay] = value;
          }
        }
      }
    } catch (error) {
    }
    var year = new Date().getFullYear()-2015;
    this.setState({ currentYear: year })
    var month = new Date().getMonth()
    this.setState({ currentMonth: month })
  };

  choseFace(num) {
    this.setState({ face: num })
  }
  changeFace() {
    switch (this.state.face) {
      case 1: this.data[this.state.currentYear][this.state.currentMonth].picture[this.state.currentDay] = { uri: require('./assets/smile.png') }; break;
      case 2: this.data[this.state.currentYear][this.state.currentMonth].picture[this.state.currentDay] = { uri: require('./assets/normal.png') }; break;
      case 3: this.data[this.state.currentYear][this.state.currentMonth].picture[this.state.currentDay] = { uri: require('./assets/sad.png') }; break;
      case 4: this.data[this.state.currentYear][this.state.currentMonth].picture[this.state.currentDay] = { uri: require('./assets/angry.png') }; break;
      case 5: this.data[this.state.currentYear][this.state.currentMonth].picture[this.state.currentDay] = { uri: require('./assets/love.png') }; break;
    }
    if(this.state.noteInput!="")this.data[this.state.currentYear][this.state.currentMonth].note[this.state.currentDay] = this.state.noteInput;
    this.storeData()
    this.setState({ modalVisible: false });
    this.setState({ face: 0 })
    this.setState({ noteInput: "" })
    
  }

  toggleModal(visible, day) {
    this.setState({ currentDay: day })
    this.setState({ modalVisible: visible });
  }
  toggleModal2(visible) {
    this.countTotalFace();
    this.setState({ modalTotal: visible });
  }
  handleInput = (text) => {
    this.setState({ noteInput: text })
  }
  viewNote(num) {
    this.setState({ currentDay: num })
  }
  previousMonth() {
    if (this.state.currentMonth - 1 >= 0) {
      this.setState({ currentMonth: this.state.currentMonth - 1 })
    } else {
      if (this.state.currentYear - 1 >= 0) {
        this.setState({ currentYear: this.state.currentYear - 1 })
        this.setState({ currentMonth: 11 })
      }
    }
    this.setState({ currentDay: 0 })
  }
  nextMonth() {
    if (this.state.currentMonth + 1 <= 11) {
      this.setState({ currentMonth: this.state.currentMonth + 1 })
    } else {
      if (this.state.currentYear + 1 < this.data.length) {
        this.setState({ currentYear: this.state.currentYear + 1 })
        this.setState({ currentMonth: 0 })
      }
    }
    this.setState({ currentDay: 0 })
  }
  render() {

    return (
      <View style={DiaryStyles.container}>
        <Modal animationType={"slide"} transparent={true}
          visible={this.state.modalVisible}>
          <View style={DiaryStyles.modal}>
            <Text style={styles.text, { fontSize: 22, marginHorizontal: '20%', marginTop: 10, marginBottom: 10, color: "#3F3F3F" }}>Choose your mood</Text>
            <TouchableOpacity onPress={() => this.choseFace(1)}><Image source={require('./assets/smile.png')} style={DiaryStyles.image1} ></Image></TouchableOpacity>
            <TouchableOpacity onPress={() => this.choseFace(2)}><Image source={require('./assets/normal.png')} style={DiaryStyles.image} ></Image></TouchableOpacity>
            <TouchableOpacity onPress={() => this.choseFace(3)}><Image source={require('./assets/sad.png')} style={DiaryStyles.image2} ></Image></TouchableOpacity>
            <TouchableOpacity onPress={() => this.choseFace(4)}><Image source={require('./assets/angry.png')} style={DiaryStyles.image} ></Image></TouchableOpacity>
            <TouchableOpacity onPress={() => this.choseFace(5)}><Image source={require('./assets/love.png')} style={DiaryStyles.image} ></Image></TouchableOpacity>
            <Text style={{ fontSize: 20, marginHorizontal: 40, marginTop: 20, color: "#3F3F3F", marginBottom: 10 }}>Add some note</Text>
            <TextInput
              style={{ height: 100, width: 280, backgroundColor: "#EFEFEF", fontSize: 18, justifyContent: "flex-start" }}
              onChangeText={this.handleInput}
              multiline
              editable
              maxLength={68}
              numberOfLines={3}
            />
            <TouchableOpacity onPress={() => this.changeFace()}>
              <View style={DiaryStyles.button}>
                <Text style={DiaryStyles.text, { justifyContent: 'center', fontSize: 25, top: 6, color: 'white' }}>OK</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>

        <View style={DiaryStyles.head}>
          <Image source={require('./assets/logo.png')} style={DiaryStyles.logo}></Image>
        </View>
        <View style={DiaryStyles.below}>
        <Text style={DiaryStyles.text1}>Note</Text> 
          <View style={DiaryStyles.noteBox}>
            <Text style={{ fontSize: 20, color: '#393939' }}>{this.data[this.state.currentYear][this.state.currentMonth].note[this.state.currentDay]}</Text>
          </View>

        </View>
        <View style={DiaryStyles.frame}>
          

          <View style={DiaryStyles.squareButton}>
            <TouchableOpacity style={DiaryStyles.blankButton} onPress={() => { this.previousMonth() }} >
              <View >
                <Image source={require('./assets/Component12.png')}></Image>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.toggleModal2(true) }}>
            <Text style={DiaryStyles.text3}>{this.state.currentDay+1} {this.data[this.state.currentYear][this.state.currentMonth].month} {this.data[this.state.currentYear][this.state.currentMonth].year}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={DiaryStyles.blankButton} onPress={() => { this.nextMonth() }}>
              <View >
                <Image source={require('./assets/Component13.png')}></Image>
              </View>
            </TouchableOpacity>
          </View>

          <View style={DiaryStyles.box}>
          <TouchableOpacity onLongPress={() => { this.toggleModal(true, 0) }} onPress={() => { this.viewNote(0) }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[0].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => { this.toggleModal(true, 1) }} onPress={() => { this.viewNote(1) }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[1].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => { this.toggleModal(true, 2) }} onPress={() => { this.viewNote(2) }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[2].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => { this.toggleModal(true, 3) }} onPress={() => { this.viewNote(3) }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[3].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => { this.toggleModal(true, 4) }} onPress={() => { this.viewNote(4) }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[4].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => { this.toggleModal(true, 5) }} onPress={() => { this.viewNote(5) }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[5].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => { this.toggleModal(true, 6) }} onPress={() => { this.viewNote(6) }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[6].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => { this.toggleModal(true, 7) }} onPress={() => { this.viewNote(7) }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[7].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => { this.toggleModal(true, 8) }} onPress={() => { this.viewNote(8) }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[8].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => { this.toggleModal(true, 9) }} onPress={() => { this.viewNote(9) }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[9].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => { this.toggleModal(true, 10) }} onPress={() => { this.viewNote(10) }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[10].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => { this.toggleModal(true, 11) }} onPress={() => { this.viewNote(11) }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[11].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => { this.toggleModal(true, 12) }} onPress={() => { this.viewNote(12) }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[12].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => { this.toggleModal(true, 13) }} onPress={() => { this.viewNote(13) }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[13].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => { this.toggleModal(true, 14) }} onPress={() => { this.viewNote(14) }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[14].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => { this.toggleModal(true, 15) }} onPress={() => { this.viewNote(15) }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[15].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => { this.toggleModal(true, 16) }} onPress={() => { this.viewNote(16) }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[16].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => { this.toggleModal(true, 17) }} onPress={() => { this.viewNote(17) }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[17].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => { this.toggleModal(true, 18) }} onPress={() => { this.viewNote(18) }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[18].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => { this.toggleModal(true, 19) }} onPress={() => { this.viewNote(19) }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[19].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => { this.toggleModal(true, 20) }} onPress={() => { this.viewNote(20) }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[20].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => { this.toggleModal(true, 21) }} onPress={() => { this.viewNote(21) }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[21].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => { this.toggleModal(true, 22) }} onPress={() => { this.viewNote(22) }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[22].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => { this.toggleModal(true, 23) }} onPress={() => { this.viewNote(23) }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[23].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => { this.toggleModal(true, 24) }} onPress={() => { this.viewNote(24) }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[24].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => { this.toggleModal(true, 25) }} onPress={() => { this.viewNote(25) }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[25].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => { this.toggleModal(true, 26) }} onPress={() => { this.viewNote(26) }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[26].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => { this.toggleModal(true, 27) }} onPress={() => { this.viewNote(27) }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[27].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => {this.data[this.state.currentYear][this.state.currentMonth].picture[28].uri!=null ? this.toggleModal(true, 28) :{}}} onPress={() => { this.data[this.state.currentYear][this.state.currentMonth].picture[28].uri!=null ?this.viewNote(28) :{} }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[28].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => {this.data[this.state.currentYear][this.state.currentMonth].picture[29].uri!=null ? this.toggleModal(true, 29) :{}}} onPress={() => { this.data[this.state.currentYear][this.state.currentMonth].picture[29].uri!=null ?this.viewNote(29) :{} }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[29].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onLongPress={() => {this.data[this.state.currentYear][this.state.currentMonth].picture[30].uri!=null ? this.toggleModal(true, 30) :{}}} onPress={() => { this.data[this.state.currentYear][this.state.currentMonth].picture[30].uri!=null ?this.viewNote(30) :{} }}>
              <Image source={this.data[this.state.currentYear][this.state.currentMonth].picture[30].uri} style={DiaryStyles.day} ></Image>
            </TouchableOpacity>
          </View>
        </View>

        <Modal animationType={"slide"} transparent={true}
          visible={this.state.modalTotal}>
          <View style={DiaryStyles.total}>
          <Text style={styles.text, { fontSize: 22, marginHorizontal: '20%', marginTop: 10, marginBottom: 10, color: "#3F3F3F" }}>Total mood</Text>
            <View style={{ justifyContent: 'center', flexDirection: 'row', marginHorizontal: '20%', marginVertical: '0.5%' }}>
              <Image source={require('./assets/smile.png')} style={{ width: 48, height: 48, }}></Image>
              <Text style={{ justifyContent: 'center', fontSize: 18, marginVertical: 14, marginHorizontal: 20, color: 'black' }}>x</Text>
              <Text style={{ justifyContent: 'center', fontSize: 18, marginVertical: 14, color: 'black' }}>{this.totalFace[0]} days</Text>
            </View>
            <View style={{ justifyContent: 'center', flexDirection: 'row', marginHorizontal: '20%', marginVertical: '0.5%' }}>
              <Image source={require('./assets/normal.png')} style={{ width: 48, height: 48, }} ></Image>
              <Text style={{ justifyContent: 'center', fontSize: 18, marginVertical: 14, marginHorizontal: 20, color: 'black' }}>x</Text>
              <Text style={{ justifyContent: 'center', fontSize: 18, marginVertical: 14, color: 'black' }}>{this.totalFace[1]} days</Text>
            </View>
            <View style={{ justifyContent: 'center', flexDirection: 'row', marginHorizontal: '20%', marginVertical: '0.5%' }}>
              <Image source={require('./assets/sad.png')} style={{ width: 48, height: 48, }} ></Image>
              <Text style={{ justifyContent: 'center', fontSize: 18, marginVertical: 14, marginHorizontal: 20, color: 'black' }}>x</Text>
              <Text style={{ justifyContent: 'center', fontSize: 18, marginVertical: 14, color: 'black' }}>{this.totalFace[2]} days</Text>
            </View>
            <View style={{ justifyContent: 'center', flexDirection: 'row', marginHorizontal: '20%', marginVertical: '0.5%' }}>
              <Image source={require('./assets/angry.png')} style={{ width: 48, height: 48, }} ></Image>
              <Text style={{ justifyContent: 'center', fontSize: 18, marginVertical: 14, marginHorizontal: 20, color: 'black' }}>x</Text>
              <Text style={{ justifyContent: 'center', fontSize: 18, marginVertical: 14, color: 'black' }}>{this.totalFace[3]} days</Text>
            </View>
            <View style={{ justifyContent: 'center', flexDirection: 'row', marginHorizontal: '20%', marginVertical: '0.5%' }}>
              <Image source={require('./assets/love.png')} style={{ width: 48, height: 48, }} ></Image>
              <Text style={{ justifyContent: 'center', fontSize: 18, marginVertical: 14, marginHorizontal: 20, color: 'black' }}>x</Text>
              <Text style={{ justifyContent: 'center', fontSize: 18, marginVertical: 14, color: 'black' }}>{this.totalFace[4]} days</Text>
            </View>

            <TouchableOpacity onPress={() => this.toggleModal2(false)}>
              <View style={DiaryStyles.buttonTotal}>
                <Text style={{justifyContent: 'center', fontSize: 25, top: 6, color: 'white' }}>OK</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      </View >
    );
  }
}
const DiaryStyles = StyleSheet.create({
  total: {
    flexWrap: "wrap",
    flexDirection: 'row',
    marginTop: '47%',
    justifyContent: "center",
    alignSelf: "center",
    height: 415,
    width: 290,
    borderRadius: 20,
    backgroundColor: 'white'
  },
  noteBox: {
    top: 15,
    marginLeft: 40,
    width: '80%',
    height: 100,
  },
  buttonTotal: {
    backgroundColor: "#7FB5B3",
    width: 280,
    height: 45,
    borderRadius: 13,
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: "#A0CDCA",
    textAlign: "center",
    alignItems: "center",
    height: 48,
    width: 136,
    borderRadius: 10
  },
  image: {
    marginHorizontal: 7,
    width: 53,
    height: 53,
  },
  image1: {
    marginLeft: 61,
    marginHorizontal: 7,
    width: 53,
    height: 53,
  },
  image2: {
    marginRight: 60,
    marginHorizontal: 7,
    width: 53,
    height: 53,
  },
  day: {
    margin: 2,
    width: 43,
    height: 43,
  },
  modal: {
    flexWrap: "wrap",
    flexDirection: 'row',
    marginTop: '45%',
    justifyContent: "center",
    alignSelf: "center",
    height: 400,
    width: 340,
    borderRadius: 20,
    backgroundColor: 'white'
  },
  logo: {
    marginLeft: 30,
    marginBottom: -33
  },
  head: {
    position: "absolute",
    height: '16%',
    width: '100%',
    backgroundColor: "#DDEBEB",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  blankButton: {
    width: 40,
    height: 20,
    justifyContent: "center",
    alignItems: 'center',
  },
  below: {
    position: "absolute",
    height: '20%',
    width: '100%',
    backgroundColor: "#DDEBEB",
    alignItems: "flex-start",
    top: '80%',
  },
  imageIcon1: {
    marginBottom: 10,
    marginLeft: 8,
    marginBottom: 10
  },
  imageIcon2: {
    marginBottom: 5,
    marginTop: 10,
    width: 75,
    height: 60
  },
  text1: {
    color: "#595959",
    fontSize: 20,
    color: "black",
    marginTop: -30,
    marginLeft: 53,
  },
  text2: {
    fontSize: 20,
    color: "black",
    marginTop: '5%',
    marginLeft: 53,
  },
  text3: {
    fontSize: 22,
    color: "white",
  },
  text4: {
    textAlign: "center",
    fontSize: 16,
    color: "black",
  },
  squareButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#7FB5B3",
    width: 280,
    height: 49,
    borderRadius: 13,
    alignItems: 'center',
    top: '20%',
    marginTop: 55,
  },
  box: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    width: 295,
    height: 268,
    alignContent: 'center',
    top: '27%',
    shadowColor: "black",
    shadowRadius: 50,
    shadowOpacity: 60,
  },
  emotionCircle: {
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#DDDDDD",
    width: 43,
    height: 43,
    borderRadius: 100,
    alignContent: 'center',
    shadowColor: "black",
    shadowRadius: 50,
    shadowOpacity: 60,
    margin: 3,
  },
  frame: {
    flex: 1,
    marginHorizontal: 18,
    marginVertical: 18,
    borderWidth: 1,
    borderColor: "#969696",
    alignItems: "center"
  },
  container: {
    flex: 1,
  },
  BackgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
})
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#7FB5B3",
    textAlign: "center",
    alignItems: "center",
    height: 50,
    width: 100,
    borderRadius: 10
  },
  container: {
    flex: 1,
    alignItems: "center",

  },
  modal: {
    marginTop: '40%',
    justifyContent: "center",
    alignSelf: "center",
    height: 300,
    width: 300,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: '#EFF7F7'
  },
  text: {
    color: '#3f2949',
  }
})

//==================================================== Test ======================================================
//https://www.npmjs.com/package/react-native-sound
class TestClass extends React.Component {
  constructor(props) {
    super(props);
    this.sound = new Array();
    this.sound[0] = new Sound('children1.mp3',Sound.MAIN_BUNDLE) 
    this.sound[1] = new Sound('children2.mp3',Sound.MAIN_BUNDLE) 
  }
  playSound(num){
      this.sound[num].play(); 
  }
  render(){
    return(
      <SafeAreaView style={SuggestionStyles.container}>
        <TouchableOpacity style={TestStyles.button} onPress={() => { this.playSound(0)}}></TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const TestStyles = StyleSheet.create({
  button: {
    backgroundColor: "#7FB5B3",
    textAlign: "center",
    alignItems: "center",
    height: 50,
    width: 100,
    borderRadius: 10
  },
})

//==================================================== AppNavigato r======================================================
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Age: AgeScreen,
    Diary: DiaryScreen,
    SearchConsult: ConsultantScreen,
    ConsultList: ConsultListScreen,
    Result: ResultScreen,
    Suggestion: SuggestionScreen,
    Question: QuestionScreen,
    Question2: QuestionScreen2,
    Question3 : QuestionScreen3,
    Test:TestClass
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}



