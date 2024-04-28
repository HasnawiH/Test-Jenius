import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { getAllContact } from './src/service';

import store from './src/redux/store';
import { Provider, useDispatch, useSelector } from "react-redux";
import { fetchContactAll } from './src/redux/actions/contactAction';

export default function App() {
  const [listAll, setListAll] = React.useState([])

  // const dispatch = useDispatch()
  // const { listAll } = useSelector((state) => state.contact)

  const fetchContactList = async () => {
    try {
      const response = await getAllContact()
      if (response?.status === 200) {
        const { data } = response?.data
        setListAll(data);
      } else {
        //handle error message
      }
    } catch (error) {
      //handle error message
    }
  }

  React.useEffect(() => {
    fetchContactList()
    // dispatch(fetchContactAll())
  }, [])

  return (
    <Provider store={store}>
      <SafeAreaView style={{ backgroundColor: '#f2f2f2' }}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Contacts</Text>
          </View>

          <View style={styles.section} >
            <View style={styles.sectionItems}>
              {listAll.map(({ photo, lastName, firstName, age }, index) => {
                  return (
                    <View key={index} style={styles.cardWrapper}>
                      <TouchableOpacity
                        onPress={() => {
                          // handle onPress
                        }}>
                        <View style={styles.card}>
                          {(photo !== 'string') ? (
                            <Image
                              alt=""
                              resizeMode="cover"
                              source={{ uri: photo }}
                              style={styles.cardImg} />
                          ) : (
                            <View style={[styles.cardImg, styles.cardAvatar]}>
                              <Text style={styles.cardAvatarText}>{firstName[0]}</Text>
                            </View>
                          )}

                          <View style={styles.cardBody}>
                            <Text style={styles.cardTitle}>{firstName} {lastName}</Text>

                            <Text style={styles.cardPhone}>Age : {age}</Text>
                          </View>

                          <View style={styles.cardAction}>
                            <FeatherIcon
                              color="#9ca3af"
                              name="chevron-right"
                              size={22} />
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  );
                })}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
  },
  header: {
    marginTop: 20,
    paddingHorizontal: 24,
    position: 'fixed'
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  /** Section */
  section: {
    marginTop: 12,
    paddingLeft: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  /** Card */
  card: {
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardWrapper: {
    borderBottomWidth: 1,
    borderColor: '#d6d6d6',
  },
  cardImg: {
    width: 42,
    height: 42,
    borderRadius: 12,
  },
  cardAvatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9ca1ac',
  },
  cardAvatarText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardBody: {
    marginRight: 'auto',
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  cardPhone: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '500',
    color: '#616d79',
    marginTop: 3,
  },
  cardAction: {
    paddingRight: 16,
  },
});