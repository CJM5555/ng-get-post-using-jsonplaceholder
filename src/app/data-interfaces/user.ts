export interface User{
    id:Number;
    name:String;
    username:String;
    email:String;
    address:Address;
}

interface Address{
    street:String;
    suite:String;
    city:String;
    zipcode:String;
    geo:GeometricLocation;
}

interface GeometricLocation{
    lat:String;
    lng:String;
}