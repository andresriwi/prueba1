import inquirer from 'inquirer';

inquirer.prompt([{
    type: 'number',
    name: 'temperatura',
    message: 'Ingresa la temperatura'
}]).then((answers) => {
    const { temperatura } = answers;
    if (temperatura < 10) {
        console.log("Hace frío, lleva chaqueta");

    } else if (temperatura <= 24) {
        console.log("Clima templado");

    } else {
        console.log("Hace calor, hidrátate");
    }
})
