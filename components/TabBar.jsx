import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { FontAwesome } from '@expo/vector-icons';


const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.Container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        if (["_sitemap", "+not-found"].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key
          });
        };

        const getIcon = (label, isFocused) => {
  switch (label) {
    case "General":
      return (
        <MaterialCommunityIcons 
          name="calculator" 
          size={24} 
          color={isFocused ? '#109DFF' : '#fff'} 
        />
      );
    case "Advance":
      return (
        <FontAwesome
         name="cube"
         size={24} 
        color={isFocused ? '#109DFF' : '#fff'
        } 
 />

      )
    case "Financial":
      return (
        <FontAwesome 
          name="dollar" 
          size={24} 
          color={isFocused ? '#109DFF' : '#fff'} 
        />
      );
    case "Scientific":
      return (
        <MaterialCommunityIcons
         name="flask"
         size={24}
         color={isFocused ? '#109DFF' : '#fff'}   />
      );
    default:
      return (
        <AntDesign 
          name="appstore1" 
          size={24} 
          color={isFocused ? '#109DFF' : '#fff'} 
        />
      );
  }
};


        return (
          <TouchableOpacity
            key={route.name}
            style={[styles.tabbarItem, isFocused && styles.focusedTabBar]}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <View style={styles.labelContainer}>
            {getIcon(label, isFocused)}
              <Text style={isFocused ? styles.focusedText : styles.unfocusedText}>
                {label}
              </Text>
              {isFocused && <View style={styles.FocusedDot} />}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0F172A",
    paddingHorizontal: 20,
    paddingVertical: 35,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    height: 130,
  },
  tabbarItem: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 70,
  },
  focusedTabBar: {
    backgroundColor: "#1E293B",
    width: 70,
    height: 125,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  FocusedDot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: "#109DFF",
    position: "absolute",
    top: 50,
    zIndex: 4,
  },
  focusedText: {
    color: '#109DFF',
    fontSize: 14,
  },
  unfocusedText: {
    color: '#fff',
    fontSize: 14,
  },
  labelContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width:150
  },
});

export default TabBar;
