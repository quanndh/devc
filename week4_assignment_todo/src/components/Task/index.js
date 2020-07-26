import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import ReduxService from '../../service/ReduxService';

const Task = ({ data, toggleDone }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => {
            Alert.alert(
                "Delete this task?",
                data.task,
                [
                    {
                        text: "Cancel",
                        onPress: () => { },
                        style: "cancel"
                    },
                    {
                        text: "OK",
                        onPress: () => { ReduxService.deleteTask(data.id) }
                    }
                ],
                { cancelable: true }
            )
        }}>
            <Text style={styles.taskText}>{data.task}</Text>
            <TouchableOpacity onPress={() => toggleDone(data.id)} style={data.isDone ? styles.checkBoxDone : styles.checkbox}>
                {data.isDone ? <EntypoIcon name="check" size={24} color="white" /> : null}
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default Task;