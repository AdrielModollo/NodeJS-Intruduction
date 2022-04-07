const questions = [
    "O que apredi hoje?",
    "O que me deixou aborrecido? E oque eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = ( index = 0 ) => {
    process.stdout.write("\n" + questions[index] + " > ") // Apresentando perguntas
}

ask()

const answers = []
process.stdin.on("data", data => { // Recebendo dados de entrada e assincronismo.
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
        Bacana Adriel!

        O que você aprendeu hoje foi:
        ${answers[0]}

        "O que me deixou aborrecido? E oque eu poderia fazer para melhorar?",
        ${answers[1]}

        "O que me deixou feliz hoje?",
        ${answers[2]}

        "Quantas pessoas ajudei hoje?",
        ${answers[3]}

    `)
})
 