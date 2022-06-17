import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native-web';
import ResultImc from './ResultImc';
import styles from './style';

export default function Form(){

    // Criando a sintaxe dos campos
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messegeImc, setMessageIMC] = useState("Preencha peso e altura");
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator(){// Faz o calculo
        return setImc((weight/(height*height)).toFixed(2))
    }

    function validationImc(){ // Para que os campos sejam preenchidos
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageIMC("Seu imc é igual: ")
            setTextButton("Calcular novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageIMC("Preencha peso e altura")
    }

    return(// Formulário
        <View style={styles.form}>
           <View>
            
            <Text>Altura</Text>
             <TextInput 
             onChangeText={setHeight}
             value={height}
             placeholder="EX. 1.75" 
             keyboardType="numeric"
             />

            <Text>Peso</Text>
            <TextInput 
            onChangeText={setWeight}
            value={weight}
             placeholder="EX. 75.365" 
             keyboardType="numeric"
             />

             <Button 
              onPress={() => validationImc()}
              title={textButton}
             />

           </View>
           <ResultImc messageResultImc={messegeImc} resultImc={imc}/>
        </View>
    );
}