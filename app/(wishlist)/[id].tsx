import { Image, Pressable, SafeAreaView, StyleSheet, ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import { pageStyles } from '@/styles'
import { ArrowLeftIcon, DownloadIcon, MenuIcon, StarIcon } from '@/components/Svgs'
import { BodyBase, BodyXLarge, Heading3 } from '@/components/Text'
import { router } from 'expo-router'

const singleWishList = () => {
    const [tab, setTab] = useState("month")
    return (
        <SafeAreaView style={pageStyles.container}>
            <View className="flex-row items-center px-4 mb-4 py-3">
                <Pressable onPress={() => router.back()} className="h-8 w-8 items-center justify-center">
                    <ArrowLeftIcon />
                </Pressable>
                <Pressable className="h-8 w-8 items-center justify-center mr-4 ml-auto">
                    <DownloadIcon />
                </Pressable>
                <Pressable className="h-8 w-8 items-center justify-center">
                    <MenuIcon />
                </Pressable>
            </View>
            <View className="px-6">
                <Heading3 className="mb-2">Nice</Heading3>
                <View className="flex-row gap-2 pb-3 mb-3">
                    <Pressable onPress={() => setTab("month")} className={`py-[10px] px-3 rounded-[20px] border-2 border-neutral-40 ${tab === "month" ? "border-neutral-100" : ""}`}>
                        <BodyBase>May 14 - 19</BodyBase>
                    </Pressable>
                    <Pressable onPress={() => setTab("guest")} className={`py-[10px] px-3 rounded-[20px] border-2 border-neutral-40 ${tab === "guest" ? "border-neutral-100" : ""}`}>
                        <BodyBase>Guests</BodyBase>
                    </Pressable>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View className="gap-8">
                        <View>
                            <View className="relative">
                                <View className="absolute p-3 top-4 left-4 z-10 bg-white rounded-md">
                                    <BodyBase className='font-medium'>SUPERHOST</BodyBase>
                                </View>
                                <Image
                                    className="h-[221px] w-full rounded-xl"
                                    source={require("@/assets/images/place2.png")}
                                />
                            </View>
                            <View className="flex-row items-center mt-[14px]">
                                <StarIcon stroke='#FF385C' />
                                <BodyBase className="ml-2 mr-1">4.98</BodyBase>
                                <BodyBase>(51)</BodyBase>
                            </View>
                            <BodyXLarge className='mt-[2px] font-bold mb-2'>Entire home in Putname Valley Modern luxury in woods 5B 3.5...</BodyXLarge>
                            <View className="flex-row">
                                <BodyXLarge className='font-semibold'>$1700</BodyXLarge>
                                <BodyXLarge className='ml-2 mr-8'>night</BodyXLarge>
                                <BodyXLarge className='text-neutral-60'>$10,156 total</BodyXLarge>
                            </View>
                        </View>
                        <View>
                            <View className="relative">
                                <View className="absolute p-3 top-4 left-4 z-10 bg-white rounded-md">
                                    <BodyBase className='font-medium'>SUPERHOST</BodyBase>
                                </View>
                                <Image
                                    className="h-[221px] w-full rounded-xl"
                                    source={require("@/assets/images/place1.png")}
                                />
                            </View>
                            <View className="flex-row items-center mt-[14px]">
                                <StarIcon stroke='#FF385C' />
                                <BodyBase className="ml-2 mr-1">4.98</BodyBase>
                                <BodyBase>(51)</BodyBase>
                            </View>
                            <BodyXLarge className='mt-[2px] font-bold mb-2'>Entire home in Putname Valley Modern luxury in woods 5B 3.5...</BodyXLarge>
                            <View className="flex-row">
                                <BodyXLarge className='font-semibold'>$1700</BodyXLarge>
                                <BodyXLarge className='ml-2 mr-8'>night</BodyXLarge>
                                <BodyXLarge className='text-neutral-60'>$10,156 total</BodyXLarge>
                            </View>
                        </View>
                        <View>
                            <View className="relative">
                                <View className="absolute p-3 top-4 left-4 z-10 bg-white rounded-md">
                                    <BodyBase className='font-medium'>SUPERHOST</BodyBase>
                                </View>
                                <Image
                                    className="h-[221px] w-full rounded-xl"
                                    source={require("@/assets/images/place3.png")}
                                />
                            </View>
                            <View className="flex-row items-center mt-[14px]">
                                <StarIcon stroke='#FF385C' />
                                <BodyBase className="ml-2 mr-1">4.98</BodyBase>
                                <BodyBase>(51)</BodyBase>
                            </View>
                            <BodyXLarge className='mt-[2px] font-bold mb-2'>Entire home in Putname Valley Modern luxury in woods 5B 3.5...</BodyXLarge>
                            <View className="flex-row">
                                <BodyXLarge className='font-semibold'>$1700</BodyXLarge>
                                <BodyXLarge className='ml-2 mr-8'>night</BodyXLarge>
                                <BodyXLarge className='text-neutral-60'>$10,156 total</BodyXLarge>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default singleWishList

const styles = StyleSheet.create({})