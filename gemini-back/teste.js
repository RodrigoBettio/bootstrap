//importando o gemini
import { GoogleGenerativeAI } from "@google/generative-ai" //Preciso configurar em algum modulo (Colocar no package json) type:"module"

//Acessando a API do gemini
const genAI = new GoogleGenerativeAI("AIzaSyAAZ_3MMY1NQpuwFBvHf3Omt3pzn2TcYjg");

//Modelo que quer usar
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//Colocando em um prompt
const prompt = "Write a story about a magic backpack.";

//Enviando prompt para o gemini
const result = await model.generateContent(prompt);

//Aguardando sua resposta
console.log(result.response.text());