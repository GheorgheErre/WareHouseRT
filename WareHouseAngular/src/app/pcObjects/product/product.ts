export  abstract class Product {
    identifier: String
    users: String
    brand: String
    model: String
    serialNumber: String
    location: String
    userNumber: String

    public abstract toJSON(): Product;
}


