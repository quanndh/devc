import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigations/RootStack';
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    Modal,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import { connect } from 'react-redux';
import ReduxService from './src/service/ReduxService';
import { TextInput } from 'react-native-gesture-handler';

const AppContent: () => React$Node = ({ openCreateModal, taskLength }) => {

    const [isActive, setIsActive] = useState(false);
    const [taskName, setTaskName] = useState("");
    console.log(taskName);

    const createTask = () => {
        let newTask = {
            id: taskLength + 1,
            task: taskName,
            isDone: false
        }
        setTaskName("");
        ReduxService.createTask(newTask);
        ReduxService.toggleCreateModal();
    }

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={openCreateModal}
                >
                    <TouchableWithoutFeedback onPress={() => {
                        setTaskName("");
                        ReduxService.toggleCreateModal()
                    }}>
                        <View style={styles.createModalContainer}>
                            <View style={styles.createModal}>
                                <Text style={styles.modalTitle}>Create a new task</Text>
                                <TextInput
                                    onFocus={() => setIsActive(true)}
                                    oBlur={() => { setIsActive(false) }}
                                    style={[styles.textInput, isActive ? styles.textInputActive : {}]}
                                    placeholder="New task"
                                    value={taskName}
                                    onChangeText={text => setTaskName(text)}
                                />
                                <TouchableOpacity style={[styles.button]} onPress={taskName.trim() != "" ? createTask : null}>
                                    <Text style={styles.buttonText}>Create</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </TouchableWithoutFeedback>
                </Modal>
                <NavigationContainer>
                    <RootStack />
                </NavigationContainer>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    createModalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.4)"
    },
    createModal: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: "white",
        padding: 12
    },
    modalTitle: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 14
    },
    textInput: {
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        padding: 8,
        color: "black",
        fontSize: 16,
        marginBottom: 16
    },
    textInputActive: {
        borderColor: "#FF958F",
        borderWidth: 2
    },
    button: {
        borderRadius: 4,
        backgroundColor: "#FF958F",
        padding: 10,
        width: "40%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    buttonText: {
        color: "white",
        fontSize: 16
    }
});

const mapStateToProps = state => {
    return {
        openCreateModal: state.UiReducer.openCreateModal,
        taskLength: state.TaskReducer.tasks.length
    }
}

export default connect(mapStateToProps)(AppContent)