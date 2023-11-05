import React, { useState } from "react";

import {
    StyleSheet, 
    Text, 
    TextInput, 
    View, 
    TouchableOpacity
} from "react-native";

interface Tarefa {
    id: string;
    title: string;
}

export const Home = () => {
    
    const [tarefas, setTarefas] = React.useState<Tarefa[]>([]); 
    const [nome, setNome] = useState('');
    const [rg, setRG] = useState('');
    const [cpf, setCPF] = useState('');
    const [email, setemail] = useState('');
    const [end, setend] = useState('');
    const [tel, setTel] = useState('');
    

    {/*[] - array*/}
    const cadastro = () => {
        alert(nome);
        alert(rg);
        alert(cpf);
        alert(email);
        alert(end);
        alert(tel);
    }
        

        

    return (
        <View style={styles.container}>
            
            
            <Text style={styles.title}>dados cliente</Text>
            <TextInput  placeholder="seu nome.." style={styles.TextInput} onChangeText={text=>setNome(text)}/> 
            <TextInput  placeholder="seu rg.." style={styles.TextInput} onChangeText={text=>setRG(text)}/> 
            <TextInput  placeholder="seu cpf.." style={styles.TextInput} onChangeText={text=>setCPF(text)}/> 
            <TextInput  placeholder="seu email.." style={styles.TextInput} onChangeText={text=>setemail(text)}/> 
            <TextInput  placeholder="seu endereço.." style={styles.TextInput} onChangeText={text=>setend(text)}/> 
            <TextInput  placeholder="seu telefone.." style={styles.TextInput} onChangeText={text=>setTel(text)}/> 

            <TouchableOpacity style={styles.btnCadastro} onPress={()=>cadastro()}>
                <Text style={{color:'white',textAlign:'center'}}>Cadastrar</Text>
            </TouchableOpacity>

          
            

        </View>
    );
}; 

const styles = StyleSheet.create({
    TextInput:{
        width:'100%',
        height:40,
        backgroundColor:'white',
        borderRadius:20,
        paddingLeft:15,
        marginBottom:20,
    },
    btnCadastro:{
        width:'100%',
        height:40,
        backgroundColor:'green',
        borderRadius:20,
        justifyContent:"center"
        
    },
    container: {
      flex: 1,
      backgroundColor: '#121214',
      padding:20,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    title: {
        color: '#f1f1f1',
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 15,
        marginBottom:20,
    }
 
  });
  