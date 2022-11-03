/**
 * This program uses the MrCoxall Stack
 *
 * By:      Daniel Pawelko
 * Version: 1.0
 * Since:   2022-11-02
 */

// Imports
import MrCoxallStack from './MrCoxallStack'
import promptSync from 'prompt-sync'

// Defining variables
const prompt = promptSync()
const myNewStack = new MrCoxallStack()

try {
  // User input
  const someNumberString = prompt('Enter an integer: ')
  const someNumber = parseInt(someNumberString)

  if (isNaN(someNumber)) {
    console.log('Input invalid :(')
  } else {
    // Using Object
    console.log('Calling push method: ')
    myNewStack.Push(someNumber)
    console.log(myNewStack.getStack())

    console.log('\nCalling pop method: ')
    console.log(myNewStack.popStack())

    console.log('\nCalling peek method: ')
    console.log(myNewStack.peekStack())
  }
} catch (e) {
  // Incase error occurs
  console.log('Input invalid :(')
}

// Done
console.log('\nDone.')
