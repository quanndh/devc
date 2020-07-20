import React, { useState } from 'react';
import {
    View,
    Text,
    Modal,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import styles from './styles';
import Button from '../../components/Button/Button';
import ChoiceCard from '../../components/ChoiceCard/ChoiceCard';

const CHOICES = [
    {
        name: 'rock',
        uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png'
    },
    {
        name: 'paper',
        uri: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png'
    },
    {
        name: 'scissors',
        uri:
            'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png'
    }
];

const HomeScreen = ({ navigation }) => {

    const [gamePrompt, setGamePrompt] = useState('Choose your weapon!');
    const [userChoice, setUserChoice] = useState({});
    const [computerChoice, setComputerChoice] = useState({});
    const [playerPoint, setPlayerPoint] = useState(0);
    const [computerPoint, setComputerPoint] = useState(0)
    const [totalGame, setTotalGame] = useState(0);
    const [openModal, setOpenModal] = useState(true);
    const [username, setUsername] = useState("")
    const [history, setHistory] = useState([]);
    const [isFocus, setIsFocus] = useState(false)

    const randomComputerChoice = () => CHOICES[Math.floor(Math.random() * CHOICES.length)];

    const getRoundOutcome = userChoice => {
        const computerChoice = randomComputerChoice().name;
        let result;

        if (userChoice === 'rock') {
            result = computerChoice === 'scissors' ? 'Victory!' : 'Defeat!';
        }
        if (userChoice === 'paper') {
            result = computerChoice === 'rock' ? 'Victory!' : 'Defeat!';
        }
        if (userChoice === 'scissors') {
            result = computerChoice === 'paper' ? 'Victory!' : 'Defeat!';
        }

        if (userChoice === computerChoice) result = 'Tie game!';
        return [result, computerChoice];
    };

    const getResultColor = () => {
        if (gamePrompt === 'Victory!') return 'green';
        if (gamePrompt === 'Defeat!') return 'red';
        return "black";
    };

    const onPress = (playerChoice) => {
        const [result, compChoice] = getRoundOutcome(playerChoice);

        const newUserChoice = CHOICES.find(choice => choice.name === playerChoice);
        const newComputerChoice = CHOICES.find(choice => choice.name === compChoice);

        setGamePrompt(result);
        setUserChoice(newUserChoice);
        setComputerChoice(newComputerChoice);
        setTotalGame(totalGame + 1);

        if (result === "Defeat!") {
            setComputerPoint(computerPoint + 1)
        } else if (result === "Victory!") {
            setPlayerPoint(playerPoint + 1)
        } else {
            setComputerPoint(computerPoint + 1)
            setPlayerPoint(playerPoint + 1)
        }
        setHistory([...history, {
            id: totalGame + 1,
            playerChoice: newUserChoice.uri,
            computerChoice: newComputerChoice.uri,
            result
        }])
    }

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={openModal}
            >
                <KeyboardAvoidingView
                    style={styles.modalContainer}
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Chose your name</Text>
                        <TextInput
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChangeText={text => setUsername(text)}
                            style={[styles.modalInput, isFocus ? { borderColor: "blue", borderWidth: 1 } : {}]}
                            placeholder="Your name"
                        />
                        <TouchableOpacity
                            style={[styles.modalButton, username == "" ? styles.modalButtonDisable : {}]}
                            onPress={username != "" ? () => setOpenModal(false) : null}
                        >
                            <Text style={[styles.modalButtonText, username == "" ? styles.modalButtonTextDisable : {}]}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </Modal>


            <View style={styles.header}>
                <Text style={styles.headerText}>Game {totalGame}</Text>
                <Text style={[styles.headerText, { color: getResultColor() }]}>{gamePrompt}</Text>
                <TouchableOpacity onPress={() => navigation.navigate("History", { history })}>
                    <Text style={styles.headerText}>Result</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.choicesContainer}>
                <ChoiceCard player={username} choice={userChoice} point={playerPoint} />
                <Text style={{ color: '#250902' }}>vs</Text>
                <ChoiceCard player="Computer" choice={computerChoice} point={computerPoint} />
            </View>

            {
                CHOICES.map(choice => {
                    return <Button key={choice.name} name={choice.name} onPress={onPress} />;
                })
            }
        </View>
    )
}

export default HomeScreen;