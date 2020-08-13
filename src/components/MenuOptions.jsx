import React, { useState } from 'react'
import {
  Menu,
  Button,
  Divider 
} from 'react-native-paper';
import { View } from 'react-native';

const MenuOptions = ({
  latestFirst,
  highesRatingtFirst,
  lowestRatingFirst,
  orderText
}) => {

  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View
      style={{
        position: 'relative',
        padding: 10,        
        flexDirection: 'row',
        justifyContent: 'center'
      }}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Button onPress={openMenu}>{orderText}</Button>}>
        <Menu.Item onPress={latestFirst}
          title="Latest"
          style={{ zindex: 2 }}
        />
        <Menu.Item onPress={highesRatingtFirst}
          title="Highest rated repositories"
        />
        <Divider />
        <Menu.Item onPress={lowestRatingFirst}
          title="Lowest rated reposiotries"
          style={{ zindex: 2 }}
        />
      </Menu>
    </View>

  )
}

export default MenuOptions
