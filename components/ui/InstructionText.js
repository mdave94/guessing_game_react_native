import {Text,StyleSheet} from 'react-native'
import Colors from '../../constants/colors';


function InstuctionText({children ,style }) {
    return <Text style={[style,styles.instructionText]}>{children}</Text>
}


export default InstuctionText;

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.yellow,
        fontSize: 24,
      },
})