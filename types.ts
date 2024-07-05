export type Character = {
   id : number;
    name : string;
    status : string;
    species : string;
    type : string;
    gender : string;
    origin : string;
    location :  object;
    image : object;
    episode : Array<string>;
    url : string;
    created : string;
}
export type Location = {
   id : number;
    name : string;
    type : string;
    dimension : string;
    residents : Array<string>;
    url : string;
    created : string;
}

export type Episode = {
   id : number;
    name : string;
    air_date : string;
    episode : string;
    characters : Array<string>;
    url : string;
    created : string;
}