import { View, Text, StyleSheet, TouchableOpacity, Alert, Share, } from "react-native";
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';


const shareButton = () => {
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                'Del dine medaljer med venner og bekendte',

            });
            if (result.action === Share.sharedAction) {
              if (result.activityType) {
                // shared with activity type of result.activityType
              } else {
                // shared
              }
            } else if (result.action === Share.dismissedAction) {
              // dismissed
            }
          } catch (error) {
            Alert.alert(error.message);
          }
        };
        return (
          <View style={styles.shareButton}>
            <TouchableOpacity onPress={onShare}>
              <View style={styles.buttonContent}>
                <Icon style={styles.buttonIcon} name="share-outline" size={24} color="white"/>
                <Text style={styles.buttonText}>
                  Del
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      };


      const styles = StyleSheet.create({
        shareButton: {
          margin: 1,
          alignSelf: 'center',
          padding: 12,
          backgroundColor: '#3C3C3C',
          borderRadius: 8,
          marginBottom: '8%',
        },

        buttonContent: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },

        buttonIcon: {
          marginRight: 4,

        },

        buttonText: {
          color: 'white',
          fontSize: 18,
        }

      })
            

      export default shareButton;
