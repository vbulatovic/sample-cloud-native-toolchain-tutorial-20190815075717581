import { Deserializable } from './deserializable.model';

class Tutorials implements Deserializable {
    name: string;
    surname: string;    
    email:string;
    gender:string;
    country: string;
    industry:string;
    company:string;
    position:string;
    tShirt:string;
    bio:string;
    linkedin:string;
    scholar:string;
    twitter:string;
    medium:string;
    github:string;
    type:string;
    level:string;
    language:string;
    topic:string;
    relatedIndustry:string;
    talkName:string;
    concept:string;
    abstract:string;
    seats: number;
    location:string;
    comment : string;
    date: string;
    startTime : string;
    endTime : string;


    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }   
}

export class Datas implements Deserializable{
    type: string;
    name: string;
    tutorials: Tutorials[];

    deserialize(input: any) {
        Object.assign(this, input);
        return this;

    } 
}