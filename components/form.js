import react, {Component} from "react";
import { Button, TextInput, View } from "react-native-web";

class Form extends Component{
    static defaultProps={
        onAdd:()=>{

        }
    }

    state={
       text:'' 

    }

    handleChange = (text) =>{

        this.setState({text});

    }
    add =()=>{
        const {state} = this
        if(state.text){
            this.props.onAdd(state.text)
            this.handleChange('')
        }
    }
    render(){
        const {state} = this;
        return(
            <View
            style={{marginTop:40}}
            >
                <TextInput value={state.text}
                placeholder='ex: Bruno Gay'
                onChangeText={this.handleChange}
                style={{borderWidth:2, borderRadius:50, padding:5}}
                />
            <Button 
            title='Adicionar'
            color='#0062ac'
            onPress={this.add}
            />
            </View>
        )
    }
}
export default Form