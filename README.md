# Teste Front-End Cakto - Rafael Jesus

### Decisões técnicas

- Fazer o checkout como um micro módulo
  [X] usar composition para montar o JSX
  [X] estado global para o checkout
  [X] criar uma interface que os métodos de pagamento devem implementar
  [X] ações no servidor

- Detalhes técnicos
- [x] - lib de UI - Tailwind puro
- [x] - estado global no ContextAPI
- [x] = actions para chamadas

### Transparência de Uso de IA

- IA implementou a função formatCurrency (utils/currency.ts)
- update the labels and the inputs, so if there is a error the text color (of the label) and the input border will be red-400
- IA gerou a função que valida CPF
- Validei com a IA meu plano de ação de usar composition e usar uma interface comum para regras de negócio de cada metódo de pagamento. Peguei dela a sugestão de usar o padrão Strategy

### Regras de negócio

Regras de taxa para pagamento com pix:

- 1 parcela:
  - Corbrar 3.99 de taxa
- 2 ou mais parcelas:
  - Cobrar taxa 4.99% de taxa + 2% de taxa por parcela
  - O produtor paga a taxa de 4.99%

  - O comprador paga o restante da taxa

Regras de taxa para pagamento com pix:

- 0% de taxas

### Como executar

`npm install`

`npm run dev`

### Para aumentar a conversão do checkout

Adicionei um label e um botão mostrando as vantagens de usar pix quando o método selecionado é cartão de crédito
