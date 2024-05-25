import { StyleSheet, Text, View } from 'react-native'
import { Tabs } from 'expo-router'
import React from 'react'

import { AirbnbIcon, HeartIcon, InboxIcon, ProfileIcon, SearchIcon } from '@/components/Svgs';
import { BodySmall } from '@/components/Text';

const _layout = () => {
    return (
        <Tabs

            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    paddingHorizontal: 24,
                    paddingBottom: 12,
                },
                tabBarBadgeStyle: {
                    height: 100,
                    backgroundColor: "purple"
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Tab name='Explore' icon={<SearchIcon />} />
                    ),
                    tabBarShowLabel: false
                }}
            />
            <Tabs.Screen
                name="wishlist"
                options={{
                    title: 'ishlist',
                    tabBarIcon: ({ color, focused }) => (
                        <Tab name='Wishlist' icon={<HeartIcon />} />
                    ),
                }}
            />
            <Tabs.Screen
                name="trips"
                options={{
                    title: 'Explore',
                    tabBarIcon: ({ color, focused }) => (
                        <Tab name='Trips' icon={<AirbnbIcon />} />
                    ),
                }}
            />
            <Tabs.Screen
                name="inbox"
                options={{
                    title: 'Inbox',
                    tabBarIcon: ({ color, focused }) => (
                        <Tab name='Inbox' icon={<InboxIcon />} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, focused }) => (
                        <Tab name='Profile' icon={<ProfileIcon />} />
                    ),
                }}
            />
        </Tabs>
    )
}

export default _layout

const styles = StyleSheet.create({})

interface TabProps {
    icon: React.ReactNode;
    name: string;
    active?: boolean;
}
const Tab = ({ icon, name }: TabProps) => {
    return (
        <View style={tabStyles.container}>
            <View>
                {icon}
            </View>
            <BodySmall>{name}</BodySmall>
        </View>
    )
}

const tabStyles = StyleSheet.create({
    container: {
        gap: 6,
        height: 44,
        justifyContent: "space-between",
        alignItems: 'center',
    }
})