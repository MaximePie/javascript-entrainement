import MyComponent from './MyComponent.js';
new Vue({
    el: '#app',
    //Ajouter le nom du composant.
    components: { MyComponent },
    data: {},
});


// export du composant.        // Nom du composant
export default Vue.component('mycomponent', {
    template: `
        <p>{{ message }}</p>
    `,

    data() {
        return {
            message: 'Message de composant vue',
        };
    },
});


new Vue({
    el: '#app',
    //Ajouter le nom du composant.
    components: { MyComponent },
    data: {},
});
