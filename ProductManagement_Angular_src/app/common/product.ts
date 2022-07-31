export class Product {
    constructor(
        public id : number,
        public sku : string,
        public pname : string,
        public description : string,
        public unitPrice : number,
        public imageurl : string,
        public unitsinStock : number,
        public dateCreated : string,
        public lastUpdated : string,
        public categoryId : string,


    ){}
}
