import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { pageStyles } from '@/styles'
import { ArrowLeftIcon, DownloadIcon, MenuIcon, StarIcon } from '@/components/Svgs'
import { BodyBase, BodyLarge, Heading2, Heading4 } from '@/components/Text'
import { Svg } from 'react-native-svg'
import { router } from 'expo-router'

const singlePlace = () => {
    return (
        <SafeAreaView className="bg-white flex-1">
            <View className="relative">
                <Image
                    className="w-full bg-contain h-[40vh]"
                    source={require("@/assets/images/place3.png")}
                />
                <View className="absolute pt-14 px-4 w-full flex-row">
                    <Pressable onPress={() => router.back()} className="h-8 w-8 mr-auto rounded-full bg-neutral-10 justify-center items-center">
                        <ArrowLeftIcon />
                    </Pressable>
                    <View className="h-8 w-8 rounded-full ml-auto mr-4 bg-neutral-10 justify-center items-center">
                        <DownloadIcon />
                    </View>
                    <View className="h-8 w-8 rounded-full bg-neutral-10 justify-center items-center">
                        <MenuIcon />
                    </View>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="p-6 border-b border-neutral-40">
                    <Heading2 className="text-neutral-100 font-bold">Private room in Yonkers close to bus/train station</Heading2>
                    <View className="flex-row items-center gap-1 mt-[14px] mb-1">
                        <StarIcon />
                        <BodyBase>5.0</BodyBase>
                        <View className="h-1 w-1 rounded-full bg-neutral-100"></View>
                        <BodyBase className='font-bold'>3 Reviews</BodyBase>
                    </View>
                    <BodyBase className='mt-1'>Yonkers, New York, United States</BodyBase>
                </View>
                <View className="p-6 pr-10 flex flex-row justify-between border-b border-neutral-40">
                    <View className="shrink">
                        <Heading4 className="text-neutral-100 font-bold">Private room in Yonkers hosted by Craig</Heading4>
                        <View className="flex-row flex-wrap items-center w-full gap-1 mt-[14px] mb-1">
                            <BodyLarge className="text-neutral-90">2 guests</BodyLarge>
                            <View className="h-1 w-1 rounded-[2px] bg-neutral-90"></View>
                            <BodyLarge className="text-neutral-90">1 bedroom</BodyLarge>
                            <View className="h-1 w-1 rounded-[2px] bg-neutral-90"></View>
                            <BodyLarge className="text-neutral-90">1 bed</BodyLarge>
                            <View className="h-1 w-1 rounded-[2px] bg-neutral-90"></View>
                            <BodyLarge className="text-neutral-90">1 private bath</BodyLarge>
                        </View>
                    </View>
                    <Image
                        className="flex-shrink-0 pl-[50px]"
                        source={require('@/assets/images/avatar.png')}
                    />
                </View>
                <View className="py-6 px-0 gap-6">
                    <View className="flex-row gap-4 justify-start items-start">
                        <View className="w-fit">
                            <Image
                                source={require("@/assets/icons/door.png")}
                            />
                        </View>
                        <View>
                            <BodyLarge className='font-medium text-neutral-100'>Self check-in</BodyLarge>
                            <BodyBase className='text-neutral-70 mt-2'>Check yourself in with the keypad</BodyBase>
                        </View>
                    </View>
                    <View className="flex-row gap-4 justify-start items-start">
                        <View className="w-fit">
                            <Image
                                source={require("@/assets/icons/location.png")}
                            />
                        </View>
                        <View>
                            <BodyLarge className='font-medium text-neutral-100'>Great Location</BodyLarge>
                            <BodyBase className='text-neutral-70 mt-2'>100% of recent guests gave the location a 5-star rating.</BodyBase>
                        </View>
                    </View>
                    <View className="flex-row gap-4 justify-start items-start">
                        <View className="w-fit">
                            <Image
                                source={require("@/assets/icons/calendar-2.png")}
                            />
                        </View>
                        <View>
                            <BodyLarge className='font-medium text-neutral-100'>Free cancellation before Feb 12.</BodyLarge>
                        </View>
                    </View>
                    <View className="gap-4 pr-6 py-6">
                        <Image 
                            source={require("@/assets/images/aircover.png")}
                        />
                        <BodyBase>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</BodyBase>
                        <BodyBase className='font-medium pb-[2px] max-w-fit underline border-neutral-100'>Learn More</BodyBase>
                    </View>
                    <View>
                        <Heading4 className='font-medium'>Where you'll sleep</Heading4>
                    </View>
                    <View>
                        <Heading4 className='font-medium'>What this place offers</Heading4>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default singlePlace

const styles = StyleSheet.create({})