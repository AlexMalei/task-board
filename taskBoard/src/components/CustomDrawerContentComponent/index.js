import React from 'react'
import {
  StyleSheet,
  View,
  TouchableHighlight,
  VirtualizedList,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
  YellowBox,
} from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'
import { Container, Content, Header } from 'native-base'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'
import IconOcticons from 'react-native-vector-icons/dist/Octicons'
import IconM from 'react-native-vector-icons/dist/MaterialIcons'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Project',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Project',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Project',
  },
  {
    id: '5862294a0f-3da1-471f-bd96-145571e29d72',
    title: '4 Project',
  },
  {
    id: '5864294a0f-3da1-471f-bd96-145571e29d72',
    title: '5 Project',
  },
  {
    id: '554294a0f-3da1-471f-bd96-145571e29d72',
    title: '6 Project',
  },
  {
    id: '5899294a0f-3da1-471f-bd96-145571e29d72',
    title: '7 Project',
  },
]

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text>
        <IconM name="local-play" size={36}
color="#9B9B9B" />
      </Text>
      <Text style={styles.textProject}>{title}</Text>
    </View>
  )
}

const CustomDrawerContentComponent = props => (
  <Container style={styles.container}>
    <ScrollView>
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
      {/* <Content /> */}
      <View style={styles.project}>
        <Text style={styles.textGray}>MENU</Text>
        <DrawerItems {...props} />
        <Text style={styles.titleProject}>PROJECTS</Text>
        <SafeAreaView style={styles.good}>
          <FlatList data={DATA} renderItem={({ item }) => <Item title={item.title} />}
keyExtractor={item => item.id} />
          <Text style={styles.titleAddProject}>+ Add a Project</Text>
        </SafeAreaView>
      </View>
    </ScrollView>
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
  titleProject: {
    color: '#9B9B9B',
    fontSize: 14,
    paddingVertical: 10,
  },
  titleAddProject: {
    color: '#FFC200',
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 10,
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
  project: {
    // top: 2,
    marginHorizontal: 15,
  },
  textProject: {
    paddingHorizontal: 25,
    color: '#9B9B9B',
    fontSize: 16,
  },
  item: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    left: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
})

export default CustomDrawerContentComponent
