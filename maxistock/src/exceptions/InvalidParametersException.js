class InvalidParametersException extends Error {
    constructor(args){
        super(args);
        this.name = "InvalidParameters"
    }
}

module.exports = { InvalidParametersException };
