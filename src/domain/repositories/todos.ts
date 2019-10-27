import firestore from '../../lib/firebase/firestore'
import { Todo, Todos } from '../entities'

export function getAll(userId: string) {
  return firestore(userId)
    .get()
    .then(querySnapshot => {
      const todos = querySnapshot.docs.reduce((result: Todos.Entity, doc) => {
        result[doc.id] = doc.data() as Todo.Entity
        return result
      }, {})
      return todos
    })
}

export function add(userId: string, newTodo: Todo.Entity) {
  firestore(userId)
    .doc(newTodo.id)
    .set(newTodo)
    .catch(e => {
      throw e
    })
}

export function remove(userId: string, id: string) {
  firestore(userId)
    .doc(id)
    .delete()
    .catch(e => {
      throw e
    })
}

export function toggle(userId: string, id: string, newValue: string | null) {
  firestore(userId)
    .doc(id)
    .update({
      completedAt: newValue,
    })
    .catch(e => {
      throw e
    })
}