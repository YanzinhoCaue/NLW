import { StatusBar } from 'expo-status-bar'
import { ImageBackground, View, Text } from 'react-native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import blurBg from './src/assets/luz.png'
import Stripes from '.src/assets/stripes.svg'
import NLWlogo from '.src/assets/nlw-logo.svg'
import { styled } from 'nativewind'
import React from 'react'

const StyledStripes = styled(Stripes)

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 items-center bg-zinc-950"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className="absolute left-2" />

      <View className="flex-1 items-center justify-center gap-6"> </View>
      <NLWlogo />
      <Text className="text-center font-title text-2xl leading-tight text-gray-50">
        Sua cápsula do tempo
      </Text>
      <View className="space-y-2">
        <Text className="text-center font-body text-base leading-relaxed text-gray-100">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </Text>
      </View>
      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
