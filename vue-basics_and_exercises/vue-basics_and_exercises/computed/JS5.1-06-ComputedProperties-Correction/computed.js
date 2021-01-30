new Vue({
    el: '#app',

    data() {
        return {
            isVisible: true,
            tasks: [
                { description: 'Faire des courses', done: true },
                { description: 'Reviser', done: false },
                { description: 'Lire mes emails', done: false },
                { description: 'Faire le menage', done: true },
            ],
        };
    },

    computed: {
        // Filtrage des tasks en fonction du statut
        tasksNotDone() {
            return this.tasks.filter(task => !task.done);
        },

        tasksDone() {
            return this.tasks.filter(task => task.done);
        },
    },
});
