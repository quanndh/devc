import React , {useState, useEffect}  from 'react'
import {
    View,
    ActivityIndicator,
    Alert,
    Text,
    FlatList,
} from 'react-native'
import styles from './styles';
import axios from 'axios';
import Post from '../../components/Post';

const filterForUniqueArticles = arr => {
    const cleaned = [];
    arr.forEach(itm => {
      let unique = true;
      cleaned.forEach(itm2 => {
        const isEqual = JSON.stringify(itm) === JSON.stringify(itm2);
        if (isEqual) unique = false;
      });
      if (unique) cleaned.push(itm);
    });
    return cleaned;
  };

const HomeScreen = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])
    const [page, setPage] = useState(1);
    const [refreshing, setRefreshing] = useState(false)

    const fetchNews = async () => {
        console.log(1)
        setLoading(true)
        try {
            if(refreshing){
                setRefreshing(false);
                let rs = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=abcaea57d4554c0fbc5f903521646862&page=' + page)
                const newArticleList = filterForUniqueArticles(data.concat(rs.data.articles));
                setData(newArticleList);
                setPage(page + 1)
            }
            
        } catch (error) {
            Alert(error.message)
        }
        setLoading(false)
        
        
    }

    const handleRefresh = () => {
        setData([])
        setPage(1);
        setRefreshing(true)
    }

    useEffect(() => {
        fetchNews()
    }, [refreshing])

    return (
        <View style={styles.container}>
            {
                loading && data.length == 0 && !refreshing ? <ActivityIndicator size='large' loading={loading}/> : (
                    <View style={styles.content}>
                         <Text style={styles.total}>Total articles: {data?.length}</Text>
                        <FlatList 
                            showsVerticalScrollIndicator
                            data={data}
                            onEndReached={fetchNews} 
                            onEndReachedThreshold={1}
                            onRefresh={handleRefresh}
                            refreshing={refreshing}
                            renderItem={({item}) => {
                                return <Post data={item}/>
                            }}
                            ListEmptyComponent={<Text>Empty =((</Text>}
                            ListFooterComponent={<ActivityIndicator size='large' loading={loading}/>}
                            keyExtractor={(item, index) => {return index}}
                        />
                    </View>
                )
            }
        </View>
    )
}

export default HomeScreen;