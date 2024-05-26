import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { pageStyles, shadowStyles } from '@/styles'
import { Colours } from '@/colours'
import { BodyBase, BodySmall } from '@/components/Text'
import { ArcticIcon, BeachIcon, IslandIcon, PoolIcon, UFOIcon } from '@/components/Svgs'
import { router } from 'expo-router'

const explore = () => {
  const [currentTab, setCurrentTab] = React.useState("OMG!")
  return (
    <View style={[pageStyles.container]}>
      <View className="px-6">
        <View style={[styles.searchBx, shadowStyles.shadow1]}>
          <Image 
            className="absolute top-6 left-[14px]"
            source={require("@/assets/icons/search.png")}
          />
          <BodyBase>Where to?</BodyBase>
          <View className="flex-row gap-1 items-center">
            <BodySmall className='text-neutral-70'>Any where</BodySmall>
            <View className="w-[3px] h-[3px] rounded-full bg-neutral-70"></View>
            <BodySmall className='text-neutral-70'>Any week</BodySmall>
            <View className="w-[3px] h-[3px] rounded-full bg-neutral-70"></View>
            <BodySmall className='text-neutral-70'>Add guests</BodySmall>
          </View>
          <View className="absolute right-[12px] top-[12px] items-center justify-center w-[38px] h-[38px] rounded-full border border-neutral-40">
            <Image 
              source={require("@/assets/icons/filter.png")}
            />
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="pl-6 mt-5 mb-8" style={styles.tabsContainer}>
            {_tabsList.map(({ name, icon }) => {
              const isActive = currentTab == name
              return (
                <Pressable className={`${isActive ? "border-b-[2px]" : ""}`} onPress={() => setCurrentTab(name)} key={name} style={styles.tab}>
                  {icon}
                  <BodySmall className={`${isActive ? "text-neutral-100" : "text-neutral-70"} font-medium`}>{name}</BodySmall>
                </Pressable>
              )
            })}
          </View>
        </ScrollView>
        <View className="px-6 gap-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <Pressable onPress={() => router.push("(explore)/34")} key={i}>
              <Image
                className="w-full bg-cover rounded-xl"
                source={require('@/assets/images/place1.png')}
              />
              <View className="flex-row mt-[14px]">
                <BodyBase className="mr-auto font-medium">Abiansemal, Indonesia</BodyBase>
                <BodyBase className="font-medium">4.87 (71)</BodyBase>
              </View>
              <BodyBase className="text-neutral-70 my-[2px]">1,669 kilometers</BodyBase>
              <BodyBase className="text-neutral-70">Jul 2-7</BodyBase>
              <View className="flex-row gap-1 mt-2">
                <BodyBase className="font-bold">$360</BodyBase>
                <BodyBase className="font-medium">night</BodyBase>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>

    </View>
  )
}

export default explore

const styles = StyleSheet.create({
  searchBx: {
    height: 62,
    borderRadius: 43,
    marginBottom: 10,
    position: 'relative',
    paddingVertical: 14,
    borderWidth: 1.5,
    paddingLeft: 46,
    borderColor: Colours.neutral[40],
    justifyContent: "space-between"
  },
  tabsContainer: {
    flexDirection: "row",
    gap: 18
  },
  tab: {
    paddingHorizontal: 8,
    paddingTop: 12,
    height: 60,
    paddingBottom: 8,
    alignItems: "center",
    // borderBottomWidth: 2,
    justifyContent: "space-between",
    borderBottomColor: Colours.neutral[100]
  },
  tabName: {

  },
  placeBx: {

  }
})

const _tabsList = [
  {
    name: "OMG!",
    icon: <UFOIcon />
  },
  {
    name: "Beach",
    icon: <BeachIcon />
  },
  {
    name: "Amazing Pools",
    icon: <PoolIcon />
  },
  {
    name: "Islands",
    icon: <IslandIcon />
  },
  {
    name: "Arctic",
    icon: <ArcticIcon />
  }
]