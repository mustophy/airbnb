import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { pageStyles } from '@/styles'
import { BodyBase, BodyLarge, Heading1 } from '@/components/Text'
import { router } from 'expo-router'

const wishlist = () => {
  return (
    <SafeAreaView className="px-6" style={pageStyles.container}>
      <Heading1>Wishlist</Heading1>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ gap: 16}} className=" mt-9">
          <Pressable onPress={() => router.push("(wishlist)/123")} className="flex-row items-center">
            <Image 
              className="rounded-xl mr-4 h-[70px] w-[70px]"
              source={require("@/assets/images/place1.png")}
            />
            <View className="gap-[2px]">
              <BodyLarge>Nice</BodyLarge>
              <BodyBase className="text-neutral-70">May 14 - 19, 2023</BodyBase>
            </View>
          </Pressable>
          <Pressable className="flex-row items-center ">
            <Image 
              className="rounded-xl mr-4 h-[70px] w-[70px]"
              source={require("@/assets/images/place2.png")}
            />
            <View className="gap-[2px]">
              <BodyLarge>Chull</BodyLarge>
              <BodyBase className="text-neutral-70">May 14 - 19, 2023</BodyBase>
            </View>
          </Pressable>
          <Pressable className="flex-row items-center ">
            <Image 
              className="rounded-xl mr-4 h-[70px] w-[70px]"
              source={require("@/assets/images/place1.png")}
            />
            <View className="gap-[2px]">
              <BodyLarge>Nice</BodyLarge>
              <BodyBase className="text-neutral-70">May 14 - 19, 2023</BodyBase>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default wishlist

const styles = StyleSheet.create({})