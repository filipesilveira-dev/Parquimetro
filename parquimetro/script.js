//classe responsável pelos cálculos (valor, tempo e troco)
class valorParquimetro{
    #credito    
    constructor(){
        this.#credito = 0;
        this.tempo = 0; 
        this.troco = 0;      
        
    }

    //ok
    creditar(valor){
        this.#credito += valor;
    }   
    
    //ok
    calcularTempo(credito){
        if(this.#credito === 0){
            return alert("Adicione um valor")
        } else {if(this.#credito>=1 && this.#credito<1.75){
                    return this.tempo = 30;
                } else if(this.#credito>=1.75 && this.#credito<3){
                    return this.tempo = 60;
                } else if (this.#credito>=3){
                    return this.tempo = 120;
                }
        }
        
    }

    //ok
    calcularTroco(credito){
        
        if (this.#credito >= 1 && this.#credito < 1.75){
             return this.troco = this.#credito - 1 ;
        } else if (this.#credito >= 1.75 && this.#credito < 3){
             return this.troco = this.#credito - 1.75 ;
        } else if (this.#credito >= 3){
            return this.troco = this.#credito - 3;
        }                
    }

    get credito(){
        return this.#credito;
    }
}

//classe responsável por mostrar valor inserido, chamar método de cálculo (tempo e troco) e mostrar tempo e troco

class parquimetro{  //responsável por capturar as informações e mostrar o resultado. Representa a interface interagindo com o usuário
    constructor(conta){ //conta será uma instância de "contaBancaria" (herança)
        this.conta = conta; //guarda essa conta como propriedade para poder realizar operações com nela
    }

    //métodos
    creditar(){

        //pegar o valor do depósito
        const valorCredito = parseFloat(document.getElementById("Credito").value)    //pega no elemento de id="valorDeposito" o seu valor (.value) que vem em forma de string e o transforma em número (parseFloat)  
             

        if (isNaN(valorCredito)){
            return alert("Adicione um valor")
        } else {
                //fazer o depósito na conta
                this.conta.creditar(valorCredito);    //o valor obtido é enviado como argumento para o método depositar() de this.conta 
        
                //exibr saldo atualizado
                this.mostrarSaldo(this.conta.credito);
        
                this.conta.calcularTempo(this.conta.credito);

                //exibir tempo atualizado
                this.mostrarTempo(this.conta.tempo);

                this.conta.calcularTroco(this.conta.credito);

                //exibir troco atualizado
                this.mostrarTroco(this.conta.troco)              

                Credito.focus();
            }
    }    
   
    //ok
    mostrarSaldo(credito){
        const creditoReais = credito.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
        document.getElementById("credito").textContent = `Crédito: ${creditoReais}`;
        document.getElementById("Credito").value = '';
    } 

    //ok
    mostrarTempo(tempo){
        document.getElementById("tempo").textContent = `Tempo: ${tempo} min`;
        document.getElementById("Credito").value = '';
    }

    //ok
    mostrarTroco(troco){
        const trocoReais = troco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
        document.getElementById("troco").textContent = `Troco: ${trocoReais}`;
        document.getElementById("Credito").value = '';
    }
}

const conta = new valorParquimetro();
const parquimetro1 = new parquimetro(conta); //importante ressaltar nessa linha que a primeira maiúsculas faz total diferença, tratando-se de duas instâncias totalmente diferentes. A "CaixaEletronico" que está sendo referenciada no "onclick" do HTML