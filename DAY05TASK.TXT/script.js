//1.class Movies
class Movie{
    constructor(title,studio,rating="PG",defaultratingmovie)
    {this.title=title;
    this.studio=studio;
    this.rating=rating;
    this.defaultratingmovie=defaultratingmovie;}
    get defaultrating(){
        return (defaultratingmovie)
    }
    }
    var Movie1=new Movie("CasinoRoyale","Eon Productions")
    var Movie2=new Movie("CasinoRoyale","Eon Productions","PG13")
    var Movie3=new Movie("CasinoRoyale","Eon Productions")
console.log(Movie1.title);
console.log(Movie1.studio);
console.log(Movie1.rating);
console.log(Movie2.title);
console.log(Movie2.studio);
console.log(Movie2.rating);
console.log(Movie3.title);
console.log(Movie3.studio);
console.log(Movie3.rating);
var Movieresult=new Movie (defaultratingmovie="Movie1 Movie3")
console.log(Movieresult.defaultrating)


2.//class circle
class Circle{
    constructor(radius=1.0,color="red"){
    this.radius=radius;
    this.color=color;
}
get RadiusCircle(){
return this.radius;
}
set RadiusCircle(radius){
this.radius=radius;
}
get ColorCircle(){
    return this.color;
    }
set ColorCircle(color){
    this.color=color;
    }
get tostring(){
    return `"Circle[radius=${this.radius},color=${this.color}]"`
} 
get Area(){
    return Math.PI*this.radius*this.radius
} 
get Circumference(){
    return 2*Math.PI*this.radius
} 
}
var final=new Circle(1.0,"red")
console.log(final.RadiusCircle)
console.log(final.RadiusCircle=1.7)
console.log(final.ColorCircle)
console.log(final.ColorCircle="green")
console.log(final.tostring)
console.log(final.Area)
console.log(final.Circumference)


//3.Write a “person” class to hold all the details.

class Person{
    constructor(names,age,gender,maritalstatus,education){
    this.names=names;
    this.age=age;
    this.gender=gender;
    this.maritalstatus=maritalstatus;
    this.education=education
}}
var result1=new Person("ravi","44","male","yes","hsC");
var result2=new Person("Emayavarman","24","male","no","BE");
console.log(result1.names);
console.log(result1.age);
console.log(result1.gender);
console.log(result1.maritalstatus);
console.log(result1.education);
console.log(result2.names);
console.log(result2.age);
console.log(result2.gender);
console.log(result2.maritalstatus);
console.log(result2.education);

//4.write a class to calculate the uber price

class Uber{
    constructor(kilometer,basefare=40){
    this.kilometer=kilometer;
    this.basefare=basefare;
}
get totalprice(){
    return(this.kilometer*this.basefare)
}
}
var Uberprice=new Uber(kilometer=3)
console.log(Uberprice.totalprice);