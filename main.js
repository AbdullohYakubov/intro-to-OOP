// console.log(navigator)

// const string = 'Hello'
// const stringAsObject = new String('Hello, how are you', 'what\'s good' )

// console.log(string, stringAsObject);

// const obj = new Object()
// console.log(obj);

// const language1 = {
//     name: 'JavaScript',
//     usedFor: 'Web & Mobile Development',
//     mostPopularFramework: 'React.js',
//     getSummary: function() {
//         return `${this.name} is used mostly for ${this.usedFor}, and ${this.mostPopularFramework} is its most popular framework.`
//     }
// }

// const language2 = {
//     name: 'Python',
//     usedFor: 'Backend Development & AI',
//     mostPopularFramework: 'Django',
//     getSummary: function() {
//         return `${this.name} is used mostly for ${this.usedFor}, and ${this.mostPopularFramework} is its most popular framework.`
//     }
// }

// console.log(language2.getSummary());
// console.log(Object.values(language2))
// console.log(Object.keys(language2))

// console.log(language2);

// Constructor
// function Language (languageName, application, framework){
//     this.name = languageName
//     this.usedFor = application
//     this.mostPopularFramework = framework
//     // this.getSummary = () => {
//     //     return `${this.name} is used mostly for ${this.usedFor}, and ${this.mostPopularFramework} is its most popular framework.`
//     // }
// }

// console.log(new Language('JavaScript', 'Web & Mobile Development', 'React.js'));

// // Prototype
// Language.prototype.getSummary = function(){
//     return `${this.name} is used mostly for ${this.usedFor}, and ${this.mostPopularFramework} is its most popular framework.`
// }

// Language.prototype.changeLanguageInfo = function(newName){
//     this.name = newName
//     this.changed = true
// }

// // Instantiate the Object
// const language1 = new Language('JavaScript', 'Web & Mobile Development', 'React.js')
// console.log(language1);
// console.log(language1.getSummary());

// language1.changeLanguageInfo("JavaScript!")
// console.log(language1);