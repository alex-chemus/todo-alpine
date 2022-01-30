document.addEventListener('alpine:init', () => {
  Alpine.store('common', {
    todos: [
      { text: 'Go to the grocery store', id: Date.now() }
    ],

    addTodo(todo) {
      if (!todo.length) return
      this.todos.push({
        text: todo,
        id: Date.now()
      })
    },

    removeTodo(id) {
      this.todos = this.todos.filter(item => item.id !== id)
    }
  })

  Alpine.data('inputArea', () => ({
    inputValue: '',

    submit() {
      this.$store.common.addTodo(this.inputValue)
      this.inputValue = ''
    }
  }))
})