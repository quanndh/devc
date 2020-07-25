import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import styles from './styles';
import { account_information, detail } from '../../data';
import StatisticCard from '../../components/StatisticCard/StatisticCard';
import Paper from '../../components/Paper/Paper';
import RecordCard from '../../components/RecordCard/RecordCard';
import moment from 'moment';
import Colors from '../../constant/Colors';
import { ScrollView } from 'react-native-gesture-handler';

const Dashboard = ({ navigation }) => {

    const records = {};
    detail.map(item => {
        if (!records[item.category]) {
            let title;
            let icon;
            let color;
            if (item.category == 1) {
                title = "Groceries";
                icon = require("../../../assets/icons/cart.png")
                color = Colors.groceryBackground;
            } else if (item.category == 2) {
                title = "Clothes";
                icon = require("../../../assets/icons/clothe.png")
                color = Colors.clotheBackground;
            } else {
                title = "Rental";
                icon = require("../../../assets/icons/home.png")
                color = Colors.rentalBackground;
            }
            records[item.category] = {
                data: [item],
                title,
                icon,
                color,
                total: item.spend_money,
                lastRecord: item.date_time
            };
        } else {
            records[item.category].data.push(item);
            records[item.category].total += item.spend_money;
            if (moment(records[item.category].lastRecord).isBefore(moment(item.date_time), "second")) {
                records[item.category].lastRecord = item.date_time;
            }
        }
    })

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>List of Account</Text>
            <View style={styles.statistic}>
                {
                    Object.keys(account_information).map((item, index) => {
                        if (typeof (account_information[item]) == "object") {
                            return (
                                <StatisticCard key={"statistic-card-" + index} type={account_information[item].type} amount={account_information[item].total} />
                            )
                        }
                    })
                }
            </View>
            <Paper>
                <View style={styles.totalMoney}>
                    <Text style={styles.totalText}>{"$" + account_information['total'].toFixed(2)}</Text>
                    <Text style={[styles.subtitle, { fontSize: 20 }]}>Total Balance</Text>
                </View>
            </Paper>
            <Text style={styles.title}>Last Records Overview</Text>

            <View style={styles.record}>
                {
                    Object.keys(records).map((item, index) => {
                        return (
                            <RecordCard navigation={navigation} key={"record-card-" + index} data={records[item]} />
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

export default Dashboard;