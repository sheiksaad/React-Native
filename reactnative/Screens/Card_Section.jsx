import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'

const Card_Section = ({title, desc, img}) => {
  return (
    <View>
      <Card>
        <Card.Content>
            <Card.Cover source={{uri: img}}/>
            <Text variant="titleLarge" style= {{color : 'black', fontWeight: 'bold', margin: 'auto', padding: 'auto'}}>{title}</Text>
            <Text variant="bodyMedium" style= {{color : 'black',  margin: 'auto'}}>{desc}</Text>
        </Card.Content>
      </Card>
    </View>
  )
}

export default Card_Section

const styles = StyleSheet.create({})