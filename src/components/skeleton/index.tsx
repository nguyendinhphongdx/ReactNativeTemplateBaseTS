import {Center, HStack, Skeleton, Text, useMediaQuery, VStack} from 'native-base';
import React from 'react';
function SkeletonControl() {
  const [isLandScape, isPortrait] = useMediaQuery([
    {
      orientation: 'landscape',
    },
    {
      orientation: 'portrait',
    },
  ]);
  return (
    <Center w="100%">
      {isPortrait && (
        <HStack
          w="90%"
          maxW="400"
          borderWidth="1"
          space={8}
          rounded="md"
          borderColor="indigo.200"
          p="4">
          <VStack flex="3" space="4">
            <Skeleton startColor="info.900" />
            <Skeleton.Text startColor="danger.300" />
            <HStack space="2" alignItems="center">
              <Skeleton size="5" rounded="full" />
              <Skeleton h="3" flex="2" rounded="full" />
              <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
            </HStack>
          </VStack>
        </HStack>
      )}
      {isLandScape && (
        <HStack
          w="90%"
          maxW="400"
          borderWidth="1"
          space={8}
          rounded="md"
          borderColor="coolGray.400"
          p="4">
          <Skeleton flex="1" h="150" rounded="md" />
          <VStack flex="3" space="4">
            <Skeleton />
            <Skeleton.Text />
            <HStack space="2" alignItems="center">
              <Skeleton size="5" rounded="full" />
              <Skeleton h="3" flex="2" rounded="full" />
              <Skeleton h="3" flex="1" rounded="full" />
            </HStack>
          </VStack>
        </HStack>
      )}
    </Center>
  );
}
export default SkeletonControl;
