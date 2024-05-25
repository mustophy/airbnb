import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { pageStyles, shadowStyles } from '@/styles'
import { Colours } from '@/colours'
import { BodyBase, BodySmall } from '@/components/Text'
import { ArcticIcon, BeachIcon, IslandIcon, PoolIcon, UFOIcon } from '@/components/Svgs'

const explore = () => {
  return (
    <View style={[pageStyles.container]}>
      <View className="px-6">
        <View style={[styles.searchBx, shadowStyles.shadow1]}>
          <BodyBase>Where to?</BodyBase>
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="pl-6 mt-5" style={styles.tabsContainer}>
          {_tabsList.map(({ name, icon }) => (
            <Pressable key={name} style={styles.tab}>
              {icon}
              <BodySmall>{name}</BodySmall>
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