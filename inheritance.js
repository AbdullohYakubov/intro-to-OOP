// Constructor
function ProgrammingLanguage (languageName, application, framework){
    this.name = languageName
    this.usedFor = application
    this.mostPopularFramework = framework
}

// Prototype
ProgrammingLanguage.prototype.getSummary = function(){
    return `${this.name} is used mostly for ${this.usedFor}, and ${this.mostPopularFramework} is its most popular framework.`
}

const javaScript = new ProgrammingLanguage('JavaScript', 'Web & Mobile Development', 'React.js')
console.log(javaScript);

// Another Constructor
function HumanLanguage(language, spokenIn, similarTo){
    ProgrammingLanguage.call(this, language, spokenIn, similarTo)
}

const english = new HumanLanguage('English', ['The UK', 'The USA', 'Australia'], 'German')
console.log(english);