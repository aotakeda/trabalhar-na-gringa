# Dicas de trabalho remoto pra gringa

Essas dicas são baseadas na minha experiência trabalhando remotamente para empresas no exterior.

## Índice

- [Dicas de trabalho remoto pra gringa](#dicas-de-trabalho-remoto-pra-gringa)
  - [Índice](#índice)
  - [Processo seletivo](#processo-seletivo)
  - [1. Entrevista com recrutamento](#1-entrevista-com-recrutamento)
    - [Perguntas comuns nessa etapa](#perguntas-comuns-nessa-etapa)
    - [Dicas](#dicas)
  - [2. Entrevistas e testes técnicos](#2-entrevistas-e-testes-técnicos)
    - [Possíveis desafios nessa etapa](#possíveis-desafios-nessa-etapa)
    - [Dicas de estudo](#dicas-de-estudo)
    - [Dicas - teste técnico](#dicas---teste-técnico)
    - [Dicas - take home](#dicas---take-home)
    - [Dicas - live coding](#dicas---live-coding)
    - [Dicas - system design](#dicas---system-design)
  - [3. Entrevista cultural](#3-entrevista-cultural)
    - [Perguntas comuns nessa etapa](#perguntas-comuns-nessa-etapa-1)
    - [Dicas](#dicas-1)
  - [4. Reference check](#4-reference-check)
  - [5. Oferta](#5-oferta)
  - [Onde e como encontrar vagas](#onde-e-como-encontrar-vagas)
  - [Burocracias](#burocracias)
    - [Criando seu CNPJ](#criando-seu-cnpj)
    - [Impostos](#impostos)
    - [Plano de saúde](#plano-de-saúde)
  - [Contribuir](#contribuir)

## Processo seletivo

Quando você é chamado para uma entrevista, você pode esperar que o processo tenha pelo menos três fases:

1. Entrevista com recrutamento
2. Entrevistas técnicas
3. Entrevista cultural com hiring manager e/ou fundadores
4. Reference check (não tão comum)
5. Oferta

Espere que as entrevistas sejam **totalmente** em inglês (mesmo com brasileiros te entrevistando), prepare-se para isso.

## 1. Entrevista com recrutamento

Essa etapa (eliminatória) é basicamente uma entrevista de RH para entender suas experiências, objetivos de carreira e porquê você está buscando uma vaga nessa empresa.

### Perguntas comuns nessa etapa

- Por que você está buscando uma vaga nessa empresa?
- Expectativa salarial (em dólares)
- Por quê você quer sair da empresa atual?
- Me conte sobre o projeto mais complexo que você participou:
  - Qual foi seu papel nele?
  - Quais foram os resultados?
  - Quais foram os desafios?
  - Quais foram as tecnologias envolvidas?

### Dicas

- Não minta, quem tem bastante experiência em entrevistas consegue saber quando a pessoa está mentindo.
- Tenha alguns projetos em mente antes dessa conversa, recomendo utilizar o [método STAR](https://capd.mit.edu/resources/the-star-method-for-behavioral-interviews/).
- Faça o cálculo da sua pretensão salarial, calcule quanto ganha atualmente mais os benefícios (convênio, VA/VR, ações, etc.) coloque uma margem a mais que faça valer a pena a troca de emprego.
- Pense nos motivos que faça você querer mudar de emprego, alguns exemplos mais comuns:
  - Trabalho 100% remoto;
  - Carreira internacional;
  - Maiores desafios técnicos;
  - Interesse pelo mercado;
  - Trabalhar com tecnologia X;

## 2. Entrevistas e testes técnicos

Passando da entrevista com recrutamento, a próxima fase geralmente são as entrevistas técnicas (mas é possível que seja com o seu possível líder).

### Possíveis desafios nessa etapa

- Teste técnico com tempo limitado
- Take home project (exercício para fazer async)
- Live coding (desafio técnico de programação)
- System design (desafio de arquitetura)
- Conversa técnica (um pouco mais rara que as outras)
  - Perguntas sobre projetos anteriores
  - Perguntas sobre linguagens e frameworks
  - Perguntas sobre design patterns
  - Perguntas sobre arquitetura de software

### Dicas de estudo

Para vagas em startups mais consolidadas recomendo estudar algoritmos e estrutura de dados.

Recomendo o livro [A Common-Sense Guide to Data Structures and Algorithms](https://pragprog.com/titles/jwdsal2/a-common-sense-guide-to-data-structures-and-algorithms-second-edition/), o canal do [Neetcode](https://www.youtube.com/@NeetCode) e a própria plataforma do [Leetcode](https://leetcode.com). Eu também tenho um site com conteúdos visuais pros algoritmos mais comuns em entrevistas, caso queira dar uma olhada, é o [Standout Dev](https://standoutdev.com/visualize/algorithms) :).

Na minha experiência, as vagas com foco maior em **backend** são as que têm mais chances de teste técnico envolvendo algoritmos e estruturas de dados.

É possível que vagas de front cobrem também, mas recomendo focar em exercícios práticos envolvendo HTML, CSS, JS/TS puro e também treinar frameworks como React e TailwindCSS.

Recomendo usar o [Great Frontend](https://www.greatfrontend.com/) pra treinar.

---

### Dicas - teste técnico

Pra testes com tempo, geralmente as empresas utilizam alguma plataforma como o [HackerRank](https://www.hackerrank.com/).

Antes de fazer o teste, teste a plataforma, veja as features disponíveis e depois de entender como ela funciona, já pode começar a fazer o teste.

Geralmente eles te pedem para resolver um problema técnico, algo não tão complexo, mas se você não tiver prática, pode ser bem difícil.

Se nunca fez um teste técnico cronometrado, recomendo treinar alguns desafios `easy` e `medium` no [Leetcode](https://leetcode.com/) antes de fazer o teste, com tempo cronometrado pra você se acostumar com a pressão do tempo.

Essa dica também serve para treinar para live coding.

---

### Dicas - take home

Leia bem os requisitos do desafio antes de começar a resolver, caso tenha alguma dúvida, mande mensagem pro recrutador pra entender melhor o que é esperado.

Cada teste varia muito de uma empresa pra outra, mas geralmente eles te pedem para criar uma API, app full-stack ou algo assim.

Tenha certeza que está cumprindo os requisitos e não esqueça de testar a aplicação.

Coloque-se no lugar da pessoa que vai revisar o seu teste, o que você gostaria que tivesse na solução de um candidato?

O que eu costumo fazer nesses testes é:

- Criar um README com:
  - arquitetura do projeto
  - tradeoffs
  - decisões de design
  - racional da escolha das tecnologias
  - como executar o projeto
  - como rodar os testes
  - link pra um vídeo de demo
- Testes unitários
- Dockerizar a aplicação
- Concerns bem separados
- Código simples, de fácil entendimento, nomes auto-explicativos

Busque fazer a sua solução a mais simples possível, evite over engineering e utilizar bibliotecas externas o máximo possível (mas claro, caso esteja explícito nos requisitos que é para usar alguma específica, utilize).

Muitas empresas se você passar dessa fase, podem fazer o live coding com base no seu teste. Então, pense em como deixar o código extensível e reutilizável pra você melhorar suas chances na próxima fase.

Outro ponto para se preparar é saber explicar os motivos das decisões de design e tradeoffs que você fez na sua solução. Isso pode ser cobrado numa próxima fase.

Isso é bem importante, ainda mais com ferramentas de AI como o Cursor que se a pessoa souber utilizar, ela pode fazer toda a solução para você, então questionar as suas decisões técnicas é importante pra empresa saber se você sabe o que está fazendo ou se só sabe utilizar ferramentas de AI.

---

### Dicas - live coding

**1. Tire todas as suas dúvidas**

Mesmo que você já tenha se deparado com um problema parecido ou igual nos seus estudos, é bom tirar todas as dúvidas sobre possíveis edge cases e tradeoffs que podem estar implícitos, mas é sempre melhor estar 100% claro.

Isso é extremamente importante, principalmente em entrevistas de System Design.

Já fiz entrevistas que claramente é esperado que o candidato faça perguntas para entender melhor o escopo do desafio (geralmente a descrição do desafio é um pouco vaga).

Nunca comece a implementar antes de ter o escopo claro.

**2. Comunicação**

Mesmo que o entrevistador tenha aplicado esse mesmo desafio centenas de vezes, é importante que você vá comunicando o seu racional **antes** de implementar.

O que costumo fazer é, depois de tirar minhas dúvidas, listar os passos que pretendo seguir pra solucionar o desafio.

Por exemplo, digamos que o desafio é o [Two Sum](https://leetcode.com/problems/two-sum/), antes de começar a implementar a solução eu falaria algo do tipo:

**Qual estrutura de dados vou utilizar**

> For this challenge I believe using hashmaps is the best way forward because it has O(1) lookup time and it's pretty straightforward to implement.

**Lógica de implementação**

> I'll use this hashmap to store the numbers and their indices. Then, I'll iterate through the array, and for each element, I'll check if the complement (target - current element) exists in the hashmap. If it does, I'll return the indices of the two numbers. If it doesn't, I'll add the current element and its index to the hashmap and continue until the pair is found.

Depois de explicar sobre como eu faria, costumo perguntar se o entrevistador está de acordo com essa abordagem e se ele tem alguma dúvida ou sugestão.

Caso ele esteja ok com a abordagem, eu começo a implementar.

Eu gosto de ir falando a lógica enquanto vou implementando, por alguns motivos:

- Envolver o entrevistador no processo de implementação;
- Aumentar a chance de ele entender o que está sendo feito;
- Aumentar a chance de ele notar se você esqueceu de algo;
- Maior chance de conseguir expor seu conhecimento técnico, boas práticas da linguagem escolhida pro desafio e tradeoffs considerados.

**Sempre** busque solucionar o problema primeiro, depois pense em otimizações.

Digamos que você não lembre como implementar um hashmap, e sim como implementar um `for` loop. Primeiro implemente o problema com o `for` loop, depois pense em como otimizar.

Não adianta você tentar a solução ideal de um problema e não conseguir implementá-la a tempo, resolva primeiro com força bruta e depois otimize.

**3. Parte técnica**

**Teste cada parte do seu código**

Conforme você for implementando, teste cada parte do seu código pra ter certeza que está funcionando.

É mais fácil solucionar possíveis bugs conforme eles forem aparecendo do que depois de implementar todo o código.

**Não se esqueça de testar edge cases**

Na parte de tirar dúvidas sobre o desafio, caso o entrevistador tenha comentado sobre possíveis edge cases, lembre-se de testar esses casos e ver se sua solução está cobrindo todos eles.

**Melhorias**

Depois de resolver o problema, pense em como otimizar a solução.

Alguns pontos que você pode considerar:

- Complexidade de tempo;
- Complexidade de espaço;
- Boas práticas de linguagem;
- Legibilidade do código;
- Extensibilidade;
- Reusabilidade;
- Testabilidade;

Para desafios de frontend:

- Acessibilidade;
- Performance;
- Responsividade;
- SEO;
- Usabilidade;
- Testabilidade;
- Componentização;
- Reusabilidade;
- Extensibilidade;

**Não se esqueça de limpar o código**

Remova qualquer código morto ou logs que você utilizou para debuggar.

---

### Dicas - system design

Pra essa fase, recomendo estudar boas práticas de arquitetura de software e design patterns.

Além disso, estude conceitos de:

- cloud computing (geralmente não é obrigatório saber tudo sobre AWS por exemplo, mas é bom saber os conceitos que são base de todas as soluções cloud);
- escalabilidade;
- performance;
- segurança;
- banco de dados;
- microserviços e monolitos;

Também é importante se aprofundar em:

- **Modelos de Consistência**: Consistência forte, eventual e causal; teorema CAP
- **Padrões Arquiteturais**:

  - Arquitetura baseada em eventos
  - CQRS (Command Query Responsibility Segregation)
  - Arquitetura serverless
  - Padrões de API gateway

- **Sistemas Distribuídos**:

  - Service discovery
  - Cache distribuído (Redis, Memcached)
  - Mensageria (Kafka, RabbitMQ)

- **Infraestrutura**:

  - Conteinerização (Docker) e orquestração (Kubernetes)
  - Infrastructure as Code (Terraform, CloudFormation)
  - Observabilidade (logs, monitoramento, tracing)

Recomendo estudar o [Designing Data-Intensive Applications](https://dataintensive.net/buy.html) e o [System Design Interview](https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF) pra essa fase.

Além de saber o que essas tecnologias fazem, é importante saber os **casos de uso mais comuns de cada uma** e como elas podem ser aplicadas no contexto do problema que você está resolvendo.

Por exemplo, você sabe que o Redis é um banco de dados em memória, mas qual a utilidade dele em um sistema distribuído?

Você sabe que Kubernetes é uma plataforma de orquestração de containers, mas ele seria útil em uma aplicação com 100 usuários ativos mensais e só um dev faz-tudo (desenvolvimento, infra, conversar com cliente, etc.) no time?

Esse [site](https://www.geeksforgeeks.org/top-10-system-design-interview-questions-and-answers/) tem uma lista com os 10 casos mais comuns de system design e os racionais de cada uma dessas soluções.

Pra startups especificamente, além da parte técnica, é importante ter em mente esses pontos também:

- Relação custo-benefício, seja em termos de tempo de desenvolvimento, custos, escalabilidade, performance, etc.
- Considerações sobre time-to-market (quanto antes a solução estiver no ar com clientes testando, melhor, a iteração rápida é essencial)
- Designs flexíveis que se adaptam às necessidades do negócio (é muito comum em startups criar MVPs com uma solução em mente mas ter que mudar completamente com o feedback do mercado)
- Soluções simples que minimizam o trabalho de manutenção

Na hora da entrevista, lembre também de:

**1. Clarificar requisitos**: De novo, recomendo fazer perguntas pra entender os requisitos funcionais e não-funcionais

**2. Começar pelo alto nível**: Inicie com um diagrama de arquitetura simplificado, e vai evoluindo conforme a solução vai sendo discutida

**3. Identificar gargalos**: Fale de forma **proativa** potenciais gargalos na sua solução e como você resolveria eles (se o entrevistador quiser mais detalhes, ele vai te perguntar, não vá muito a fundo para não perder tempo de entrevista)

**4. Explicar tradeoffs**: Explique claramente os prós e contras das suas escolhas

O mais importante dessa fase é o entrevistador entender como você pensa sobre o problema e como você aborda o problema, o que você aprendeu com suas experiências passadas e como você utiliza esses conhecimentos para resolver problemas de arquitetura.

Não há respostas certas, o importante é demonstrar conhecimento e aprendizados de um bom desenvolvedor sênior.

## 3. Entrevista cultural

Essa etapa é basicamente uma conversa com o seu possível líder e/ou fundadores para entender como você se encaixa na cultura da empresa.

É possível que tenha algum componente técnico nessa entrevista, mas geralmente é mais uma conversa sobre como você se encaixaria na cultura da empresa e do time.

### Perguntas comuns nessa etapa

- Por que você quer trabalhar nessa empresa?
- Qual foi o pior feedback que você já recebeu e como você reagiu a ele?
- Você prefere ambientes mais dinâmicos ou mais calmos?
- Como você lida com incertezas?
- Me conte sobre um projeto que você se orgulha e por quê?
- Como você geralmente aprende novas tecnologias?
- Quais são suas expectativas com o cargo?

### Dicas

- Seja objetivo nas respostas, caso a pessoa queira saber mais detalhes, ela vai te perguntar.
- Antes da entrevista, relembre os projetos mais relevantes da sua carreira e como foi sua participação neles (igual na entrevista com recrutamento, mas com um nível mais aprofundado de tecnologia e impacto).
- De novo, não minta sobre suas experiências, o mundo de tecnologia é pequeno e não vale a pena se queimar.
- Faça perguntas sobre a empresa, sobre o cargo, sobre a equipe, sobre o ambiente de trabalho, sobre a empresa em si, essa entrevista é uma oportunidade pra você conhecer mais sobre a empresa, a vaga e o time que você trabalharia.

## 4. Reference check

Essa etapa é menos comum mas se fizer parte do processo, é uma etapa para a empresa validar suas experiências e também para entender como é trabalhar com você.

Geralmente te pedem para fornecer alguns contatos de ex-colegas e líderes diretos.

Antes de fornecer esses contatos, recomendo conversar com eles para saber se tudo bem mandar o contato deles.

## 5. Oferta

Se tudo deu certo, a empresa vai marcar uma reunião com você para fazer a oferta ou já te enviar uma oferta por email.

Leia a oferta com calma, não se sinta pressionado a aceitar logo de cara, principalmente se tem outros processos em andamento que queira ir até o final.

Caso tenha outros processos em andamento, recomendo alinhar com o recrutador sobre o status de cada processo e o prazo de resposta que você tem para dar aceitar ou não a oferta.

Algumas perguntas importantes nessa etapa:

- O salário vai ser pago em dólares?
- Há possibilidade de promoções/aumentos?
- O formato de contratação é CLT ou PJ (mais comum)?
- Qual o fuso horário que você terá que trabalhar?
- Usarei equipamento próprio ou a empresa fornecerá?
- Há política de PTO (paid time off - famoso férias remuneradas)? Feriados nacionais estão incluídos?
- Há benefícios como VA/VR, plano de saúde, etc. (incomum em caso de oferta contractor)?
- Prazo para início do trabalho?

## Onde e como encontrar vagas

Encontrar vagas pra fora é um pouco diferente de encontrar vagas "normais" de empresas brasileiras.

Algumas palavras-chave que te ajudam a descobrir se a vaga é pra gringa:

- USD compensation
- US Dollar ou US$
- Worldwide
- Work/remote from anywhere

Esses são os sites e plataformas que uso quando quero encontrar vagas pra gringa:

- [LinkedIn](https://www.linkedin.com/) (o mais conhecido mas tem que procurar palavras-chave na descrição da vaga)
- [Wellfound](https://wellfound.com/jobs) (muito boa para encontrar vagas de startups)
- [We Work Remotely](https://weworkremotely.com/)
- [Work at a Startup](https://www.workatastartup.com/companies?demographic=any&hasEquity=any&hasSalary=any&industry=any&interviewProcess=any&jobType=any&layout=list-compact&locations=BR&remote=yes&remote=only&role=eng&sortBy=created_desc&tab=any&usVisaNotRequired=any) (vagas de startups da YC, a maior incubadora de startups do mundo)

Além de encontrar nesses job boards, recomendo usar o Google utilizando booleanos pra encontrar vagas fora desses sites.

Exemplo:

```
(site:lever.co OR site:greenhouse.io OR site:workday.com OR site:jobs.ashbyhq.com OR site:apply.workable.com OR site:breezy.hr OR site:smartrecruiters.com OR site:recruitee.com OR site:jobvite.com OR site:hirehive.com OR site:zoho.com OR site:taleo.net OR site:icims.com OR site:jazzhr.com) AND ("frontend engineer" OR frontend OR "front-end" OR "front end engineer" OR "front-end engineer" OR "full stack engineer" OR fullstack OR "full-stack" OR "product engineer" OR "fullstack engineer") AND (americas OR "south america" OR latam OR brazil OR "latin america" OR anywhere)
```

Explicando um pouco essa busca:

- Cria um target mais específico em sites ATS (Applicant Tracking Systems) e nesse caso, vai buscar vagas com palavras-chave mais específicas como "frontend engineer" e "full stack engineer" e estando em inglês a chance de ser uma vaga pra gringa é maior.
- Além desses cargos, o Google vai buscar outras palavras-chave como "remote" ou "work from anywhere" que estão na descrição da vaga.

Recomendo mudar apenas a parte de cargos pra moldar a sua busca, mas não mude os sites de ATS ou as palavras-chave de localidade.

## Burocracias

A modalidade de contratação mais comum é PJ (contractor), mas é possível que a empresa ofereça CLT por meio de uma empresa terceirizada, usando o modelo de Employer of Record (EOR).

As dicas abaixo são voltadas pra quem vai trabalhar como contractor.

### Criando seu CNPJ

Não sou contador, recomendo procurar por uma empresa de contabilidade que faça esse trabalho por você.

O processo de abertura de empresa vai depender de qual cidade você vai abrir a empresa, recomendo procurar por uma empresa de contabilidade que faça esse trabalho por você, algumas como a [Contabilizei](https://www.contabilizei.com.br/) fazem o processo de graça se você fechar o plano de contabilidade com eles.

PS: não sou parceiro/afiliado da Contabilizei, só recomendo por experiência própria, pesquise bastante antes de tomar uma decisão.

### Impostos

Trabalhando para fora do Brasil, você vai ter algumas isenções de impostos, na minha experiência, você pode esperar em torno de 10% de impostos sobre o salário bruto.

Mas, novamente, isso vai depender de cada caso, recomendo conversar com seu contador sobre isso.

### Plano de saúde

Você vai ser responsável pela contratação de plano de saúde, recomendo procurar por uma empresa de seguros ou a própria empresa de contabilidade que você escolher pode te ajudar com isso.

Quanto mais PJs se juntarem para contratar planos de saúde, mais barato vai ser o plano. Por isso, empresas de contabilidade geralmente ajudam com isso.

## Contribuir

Infelizmente, não vou abrir para contribuições porque não vou ter tempo para revisar PRs.

Caso queira dar algum feedback, abra uma **issue** no repositório que eu vou responder o mais rápido possível.

---

Feito com ❤️ por [Arthur Takeda](https://www.linkedin.com/in/arthurtakeda).
