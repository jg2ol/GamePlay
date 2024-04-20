import React, { useState } from 'react';
import { View, Image, StatusBar, Text, TextInput } from 'react-native';
import { styles } from './styles';

import IllustraionImg from '../assets/illustration.png';
import {ButtonIcon} from '../components/ButtonIcon';

export function SignIn() {
  const [text, setText] = useState("Voçê não digitou nada ainda.");

};

export function SingnIn() {
  return(
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={"transparent"} translucent />
      <Image source={IllustraionImg} style={styles.image} resizeMode='stretch' />

    <View style={styles.content}>
      <Text style={styles.title}>
        - Organize suas - {`\n`}
        Jogatinas {`\n`}
        facilmente
      </Text>
      <Text style={styles.subtitle}>
        Crie grupos para jogar seus games {`\n`}
        favoritos com seus amigos
      </Text>
      <ButtonIcon title="Entrar com Discord" />
      <ButtonIcon title="batata" />

    </View>
    </View>
  );
}