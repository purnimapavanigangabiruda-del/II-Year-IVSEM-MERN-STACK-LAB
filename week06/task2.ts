function add(a: number, b: number): number {
  return a + b
}

function greet(name: string): string {
  return "Hello " + name
}

function printMessage(msg: string): void {
  console.log(msg)
}

console.log(add(10, 20))
console.log(greet("Karthik"))
printMessage("TypeScript is cool")