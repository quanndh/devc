import React, { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import styles from './styles';
import Task from '../../components/Task';
import { connect } from 'react-redux';
import ReduxService from "../../service/ReduxService";

const HomeScreen = ({ tasks }) => {
    const [done, setDone] = useState(0);

    useEffect(() => {
        const getDone = () => {
            if (tasks.length) {
                let done = 0;
                tasks.map(t => {
                    if (t.isDone) done++;
                })
                setDone(done)
            }
        }
        getDone()
    }, [tasks])

    const toggleDone = (id) => {
        ReduxService.toggleDone(id)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo list</Text>
            <View style={styles.statistic}>
                <View style={[styles.statisticCard, {
                    backgroundColor: "#23E3D6"
                }]}>
                    <Text style={styles.statisticTitle
                    } > Done</Text>
                    <Text style={styles.statisticAmount}>{done}</Text>
                </View>
                <View style={[styles.statisticCard, {
                    backgroundColor: "#EFA75A"
                }]}>
                    <Text style={styles.statisticTitle}>Undone</Text>
                    <Text style={styles.statisticAmount}>{tasks.length - done}</Text>
                </View>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                data={tasks}
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

export default connect(mapStateToProps)(HomeScreen);