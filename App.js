import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { firestore } from './firebaseConfig';

export default function App() {
    const [message, setMessage] = useState('');

    const sendNotification = async () => {
        if (message) {
            try {
                await addDoc(collection(firestore, 'notifications'), {
                    text: message,
                    createdAt: serverTimestamp(),
                    read: false
                });
                setMessage('');
                Alert.alert("Mensagem Enviada", "Sua mensagem foi enviada com sucesso!");
            } catch (error) {
                console.error("Erro ao enviar notificação: ", error);
            }
        } else {
            Alert.alert("Erro", "A mensagem não pode estar vazia.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enviar Notificação</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite a mensagem"
                value={message}
                onChangeText={setMessage}
            />
            <TouchableOpacity style={styles.button} onPress={sendNotification}>
                <MaterialIcons name="send" size={24} color="white" />
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        fontSize: 18,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        marginLeft: 10,
        fontSize: 18,
    },
});
