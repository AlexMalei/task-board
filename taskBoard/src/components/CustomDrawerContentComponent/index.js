import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'
import { Container, Content, Header } from 'native-base'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'
import IconOcticons from 'react-native-vector-icons/dist/Octicons'

const CustomDrawerContentComponent = props => (
  <Container style={styles.container}>
    <View style={styles.title}>
      <IconOcticons style={styles.iconTitle} name="tasklist" />
      <Text style={styles.titleText}>PROJECTUS</Text>
      <IconOcticons style={styles.iconSearch} name="search" />
    </View>
    <Header style={styles.header}>
      <Image style={styles.drawerImage} source={require('@/assets/user_logo.jpeg')} />
      <View>
        <Text style={styles.textName}>Sacha Belui</Text>
        <Text style={styles.textGray}>Junior</Text>
      </View>
      <Icon style={styles.icon} name="more-horiz" />
    </Header>
    <View style={styles.dataTasks}>
      <View>
        <Text style={styles.textDataTasks}>129</Text>
        <Text style={styles.textGray}>Completed Tasks</Text>
      </View>
      <View>
        <Text style={styles.textDataTasks}>24</Text>
        <Text style={styles.textGray}>Open Tasks</Text>
      </View>
    </View>
    <Content>
      <DrawerItems {...props} />
    </Content>
    <View>
      <Text style={styles.textGray}>PROJECTS</Text>
    </View>
  </Container>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingVertical: 30,
    // marginHorizontal: 15,
    backgroundColor: 'black',
    color: 'red',
  },
  title: {
    height: 80,
    alignItems: 'center',
    backgroundColor: '#000000',
    paddingHorizontal: 0,
    marginHorizontal: 0,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  header: {
    height: 80,
    backgroundColor: '#202020',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  drawerImage: {
    height: 48,
    width: 48,
    borderRadius: 75,
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    height: 48,
  },
  icon: {
    color: '#9B9B9B',

    fontSize: 28,
  },
  iconTitle: {
    marginHorizontal: 15,
    color: '#FFC200',
    fontSize: 28,
  },
  iconSearch: {
    left: 70,
    color: '#9B9B9B',
    fontSize: 30,
  },
  titleText: {
    color: '#FFFFFF',
    opacity: 1,
    letterSpacing: 0,
    fontFamily: 'Black',
    fontSize: 16,
    textAlign: 'left',
  },
  textName: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  textGray: {
    color: '#9B9B9B',
    fontSize: 14,
  },
  dataTasks: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingVertical: 20,
  },
  textDataTasks: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default CustomDrawerContentComponent
