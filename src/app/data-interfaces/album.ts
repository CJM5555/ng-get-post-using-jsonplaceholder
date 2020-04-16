export interface Album{
    userId:Number;
    id:String;
    title:String;
}

export interface Photo{
    albumId:Number;
    id:Number;
    title:String;
    url:String;
    thumbnailurl:String;
}