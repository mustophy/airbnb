import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { pageStyles } from '@/styles'
import { Colours } from '@/colours'
import { BodyBase, BodySmall, Heading1 } from '@/components/Text'

const inbox = () => {
  const [currentTab, setCurrentTab] = useState("messages")
  return (
    <SafeAreaView className="px-6" style={pageStyles.container}>
      <Heading1 className='mb-3'>Inbox</Heading1>
      <View style={styles.tabs}>
        <Pressable onPress={() => setCurrentTab("messages")} style={[styles.tab, currentTab == "messages" && styles.activeTab]}>
          <BodyBase style={[styles.tabText, currentTab == "messages" && styles.activeTabText]}>Messages</BodyBase>
          <View style={[styles.notification, currentTab === "messages" && styles.activeTabNotification]}>
            <BodySmall className='text-neutral-10'>1</BodySmall>
          </View>
        </Pressable>
        <Pressable onPress={() => setCurrentTab("notifications")} style={[styles.tab, currentTab == "notifications" && styles.activeTab]}>
          <BodyBase style={[styles.tabText, currentTab == "notifications" && styles.activeTabText]}>Notifications</BodyBase>

          <View style={[styles.notification, currentTab == "notifications" && styles.activeTabNotification]}>
            <BodySmall className='text-neutral-10'>4</BodySmall>
          </View>
        </Pressable>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {[1, 22, 23, 21, 20, 12, 3, 4, 8, 9].map(a => (
          <View key={a} style={styles.chatRow}>
            <View style={styles.chatAvatar}>

            </View>
            <View>
              <View className="flex-row">
                <BodyBase>Craig</BodyBase>
                <BodyBase>New York</BodyBase>
              </View>
              <BodyBase className='my-[2px]'>Airbnb Update: Reservation cancelled</BodyBase>
              <View className="flex-row">
                <BodySmall className='text-neutral-70'>Cancelled</BodySmall>
                <BodySmall className='ml-[18px] text-neutral-70'>Feb 13 - 14, 2023</BodySmall>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default inbox

const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    gap: 12
  },
  tab: {
    flexDirection: "row",
    gap: 4,
    paddingVertical: 12,
    borderColor: "transparent",
    borderBottomWidth: 2
  },
  activeTab: {
    borderColor: Colours.neutral[100]
  },
  activeTabText: {
    color: Colours.neutral[100]
  },
  tabText: {
    fontWeight: "medium",
    color: Colours.neutral[60]
  },
  notification: {
    height: 22,
    width: 22,
    backgroundColor: Colours.neutral[50],
    alignItems: "center",
    justifyContent: "center",
    color: Colours.neutral[10],
    borderRadius: 11
  },
  activeTabNotification: {
    backgroundColor: Colours.neutral[100]
  },
  chatRow: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: Colours.neutral[50]
  },
  chatAvatar: {
    height: 56,
    width: 56,
    borderRadius: 28,
    backgroundColor: Colours.neutral[100]
  }
})