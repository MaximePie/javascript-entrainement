export default Vue.component('MyComponent', {
    template: `
        <p>{{ message }}</p>
    `,

    data() {
        return {
            message: 'Message de composant vue',
        };
    },
});
