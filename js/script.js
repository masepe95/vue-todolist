console.log('JS OK', Vue) 

const app = Vue.createApp({
    name: 'Todolist',
    data() {
        return {
            tasks: [
                {
                    id: 1,
                    done: false,
                    text: 'Studiare'
                },
                {
                    id: 2,
                    done: false,
                    text: 'Leggere'
                },
                {
                    id: 3,
                    done: false,
                    text: 'Allenarsi'
                },
                {
                    id: 4,
                    done: false,
                    text: 'Riposare'
                }
            ]
        };
    },

    computed: {
        completedTasks() {
            return this.tasks.filter(task => task.done);
        },
        toDoTasks() {
            return this.tasks.filter(task => !task.done);
        }

    }, 
    
    methods: {
        deleteTask(taskToDeleteId) {
            this.tasks = this.tasks.filter(({ id }) => id !== taskToDeleteId)
        }
    }
})



app.mount('#root');