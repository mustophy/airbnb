import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { pageStyles } from '@/styles'
import { Colours } from '@/colours'
import { BodyBase, BodyLarge, Heading1, Heading4 } from '@/components/Text'
import { BriefcaseIcon, ChevronRightIcon, LockIcon, MoneyIcon, NotificationIcon, ProfileIcon, TranslateIcon } from '@/components/Svgs'

const profile = () => {
  return (
    <SafeAreaView style={pageStyles.container}>
      <View className="px-6 pb-6 border-b border-neutral-40">
        <View style={styles.avatar}></View>
        <Heading1>John</Heading1>
        <View className="flex-row mt-12">
          <Image
            source={require("@/assets/images/reward.png")}
          />
          <View className="ml-[14px]">
            <BodyLarge className='font-medium'>Earn money from your extra space</BodyLarge>
            <BodyBase className='underline'>Learn more</BodyBase>
          </View>
        </View>
      </View>
      <View className="px-6">
        <Heading4 className='my-6'>Account Settings</Heading4>
        <ScrollView showsVerticalScrollIndicator={false}>
          {_settingsList.map(({ icon, name }) => (
            <Pressable style={styles.settingRow}>
              <View className="w-8">
                {icon}
              </View>
              <BodyLarge className='ml-[14px] mr-auto font-semibold'>{name}</BodyLarge>
              <ChevronRightIcon />
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default profile

const styles = StyleSheet.create({
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 24,
    marginBottom: 14,
    backgroundColor: Colours.neutral[80]
  },
  settingRow: {
    flexDirection: "row",
    paddingVertical: 13,
    borderBottomWidth: 1,
    alignItems: 'center',
    borderBottomColor: Colours.neutral[40]
  }

})

const _settingsList = [
  {
    name: "Personal Information",
    icon: <ProfileIcon />
  },
  {
    name: "Payments and payouts",
    icon: <MoneyIcon />
  },
  {
    name: "Translation",
    icon: <TranslateIcon />
  },
  {
    name: "Notifications",
    icon: <NotificationIcon />
  },
  {
    name: "Privacy and sharing",
    icon: <LockIcon />
  },
  {
    name: "Travel for work",
    icon: <BriefcaseIcon />
  },
]