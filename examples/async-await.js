function delay(ms) {
    console.log("delay")
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function firstFunction() {
    console.log('Ejecutando la primera función');
    await delay(2000); // Simulamos una operación asincrónica de 2 segundos
    console.log('Finalizando la primera función');
  }
  
  async function secondFunction() {
    console.log('Ejecutando la segunda función');
    await delay(1000); // Simulamos una operación asincrónica de 1 segundo
    console.log('Finalizando la segunda función');
  }
  
  async function thirdFunction() {
    console.log('Ejecutando la tercera función');
    await delay(1500); // Simulamos una operación asincrónica de 1.5 segundos
    console.log('Finalizando la tercera función');
  }
  
  async function main() {
    await firstFunction();
    await secondFunction();
    await thirdFunction();
  }
  
  main();