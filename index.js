class Formatter {
  
  static capitalize(string){
      return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(string){
      let exception = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let finished = []
    let splitted = string.split(" ")
    
    for(let i = 0; i< splitted.length; i++){
      if( i === 0){
        finished.push(this.capitalize(splitted[i]))
      } else{
        if (exception.includes(splitted[i])){
             finished.push(splitted[i])
        } else{
          finished.push(this.capitalize(splitted[i]))
        }
     
      }
    }
    
     return finished.join(" ")

    // console.log(sth)
  }
  

}