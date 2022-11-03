/**
 * Mr Coxall Stack
 *
 *
 * By: Daniel Pawelko
 * Version: 1.0
 * Since:   2022-11-02
 */

class MrCoxallStack {
  stack_as_list: number[] = []

  Push(pushedNumber: number): void {
    if (isNaN(pushedNumber)) {
      // Number not valid
      console.log('Number not passed')
    } else {
      // add a number to the list
      this.stack_as_list.push(pushedNumber)
    }
  }

  getStack(): number[] {
    // return stack
    return this.stack_as_list
  }

  popStack(): number | undefined | string {
    if (this.stack_as_list.length === 0) {
      // Stack has no elements
      return 'Stack has a length of 0'
    } else {
      // Pop stack and return it
      return this.stack_as_list.pop()
    }
  }

  peekStack(): number | undefined | string {
    if (this.stack_as_list.length === 0) {
      // Stack has no elements
      return 'Stack has a length of 0'
    } else {
      // Return last element in array
      return this.stack_as_list[this.stack_as_list.length - 1]
    }
  }
}
export = MrCoxallStack
