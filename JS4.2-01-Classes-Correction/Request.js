class Request {
    getInputs(inputs) {
        inputs.forEach(input => {
            console.log(input.value);
        });
    }
}

export default Request;
