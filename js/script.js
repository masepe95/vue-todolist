console.log('JS OK', Vue) 

const app = Vue.createApp({
    name: 'Todolist',
    data() {
        return {
            searchedTask: '',
            newTask: '',
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
        filteredTasks() {
            const searched = this.searchedTask.trim().toLowerCase();
            return this.tasks.filter(({ text }) => text.toLowerCase().includes(this.searchedTask));
        },
        nextId() {
            let highestId = this.tasks.reduce((highest, { id }) => id > highest ? id : highest, 0);
            return ++highestId;
        },
        completedTasks() {
            return this.filteredTasks.filter(task => task.done);
        },
        toDoTasks() {
            return this.filteredTasks.filter(task => !task.done);
        }

    }, 

    methods: {
        deleteTask(taskToDeleteId) {
            this.tasks = this.tasks.filter(({ id }) => id !== taskToDeleteId)
        },
        addTask() {
            const text = this.newTask.trim();
            this.newTask = '';

            if (!text) return;

            const id = this.nextId;

            const newTask = {
                id,
                text,
                done: false
            }

            this.tasks.push(newTask);

            this.$refs.addInput.focus();
        }
    }
})



app.mount('#root');