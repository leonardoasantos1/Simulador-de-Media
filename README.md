# Calculadora de Média

Esta é uma aplicação web simples para calcular a média de notas de um aluno com base em quatro avaliações: AC1, AC2, PEX e AR. A aplicação determina se o aluno está aprovado, em exame ou reprovado com base na média calculada.

## Funcionalidades

- **Inserção de Notas**: Campos para inserir notas das avaliações AC1, AC2, PEX e AR.
- **Cálculo da Média**: Botão para calcular a média ponderada das notas.
- **Exibição do Resultado**: Mostra o resultado em uma janela modal indicando a situação do aluno (Aprovado, Exame ou Reprovado).
- **Limpar Campos**: Botão para limpar todos os campos de entrada.
- **Informações Adicionais**: Um offcanvas com instruções detalhadas sobre o uso da calculadora.

## Estrutura do Projeto

- `index.html`: Contém o layout da aplicação.
- `assets/CSS/estilo.css`: Arquivo de estilo CSS para personalização.
- `assets/JS/script.js`: Contém o código JavaScript para manipulação dos eventos e cálculos.
- `assets/imagens/`: Pasta contendo imagens utilizadas na aplicação.

## Instruções de Uso

1. **Inserindo Notas**: Preencha os campos para AC1, AC2, PEX e AR com suas notas de 0 a 10.
2. **Calculando a Média**: Clique no botão "Calcular". O resultado aparecerá em uma janela modal.
3. **Interpretando o Resultado**:
    - **Aprovado**: Média maior ou igual a 7.
    - **Exame**: Média entre 3 e 6.9.
    - **Reprovado**: Média menor que 3.
4. **Limpar Campos**: Clique no botão "Limpar" para resetar os campos.

## Pesos das Notas

- **AC1**: 10%
- **AC2**: 20%
- **PEX**: 20%
- **AR**: 50%

## Mensagens de Erro

Certifique-se de preencher todos os campos com valores válidos. Se algum campo estiver vazio ou com valor inválido, será exibida uma mensagem de erro.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
