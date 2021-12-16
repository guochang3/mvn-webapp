function Person(name, age, gender)
{
    this.name = name;
    this.age = age;
    this.gender = gender ;
    this.getGender = function()
    {
        return this.gender;
    }
}
var p1 = new Person("guochang",26,"male");
console.log(p1.age);
console.log(p1.getGender());
console.log(p1);
console.log(typeof p1);
console.log(p1.constructor);


