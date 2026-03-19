import { View, StyleSheet } from 'react-native'; 
import { useState } from 'react';
import { Text, Button, Provider as PaperProvider } from 'react-native-paper';


export default function Count() {
    const [contador, setContador] = useState(0);

    function Contar() {
        setContador(contador + 1);
    }

    function Diminuir() {
        if (contador > 0) {
            setContador(contador - 1);
        } else {
            alert('O contador não pode ser menor que 0');
        }
    }

    return (
        <Provider>
        <View style={styles.container}>
        
            <Text style={styles.titulo}>Contador: {contador}</Text>

            <Button
                buttonColor = "#3ae465ff"
                mode="contained"
                onPress={Contar}
            />

            <Button
               
                
                mode="contained"
                onPress={Diminuir}
            />
        </View>
        </Provider>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1572c9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 20,
    }
});