import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList
} from 'react-native';
import Task from '../../components/Task';
import styles from './styles';
import { connect } from 'react-redux';
import ReduxService from '../../service/ReduxService';

const DoneScreen = ({ tasks }) => {

    const [doneTask, setDoneTask] = useState([]);

    useEffect(() => {
        tasks = tasks.filter(task => task.isDone);
        setDoneTask(tasks)
    }, [tasks])

    const toggleDone = (id) => {
        ReduxService.toggleDone(id)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Done tasks</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                data={doneTask}
                renderItem={({ item }) => {
                    return <Task data={item} toggleDone={toggleDone} />
                }}
            />
        </View>
    )
}

const mapStateToProps = state => {
    return {
        tasks: state.TaskReducer.tasks,
        openCreateModal: state.UiReducer.openCreateModal
    }
}

export default connect(mapStateToProps)(DoneScreen);
