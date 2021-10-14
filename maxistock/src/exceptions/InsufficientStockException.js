class InsufficientStockException extends Error {
    constructor(args){
        super(args);
        this.name = "InsufficientStock"
    }
}

module.exports = { InsufficientStockException };