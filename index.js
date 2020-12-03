class Formatter 
{
  static capitalize(word)
  {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  static sanitize(word)
  {
    return word.replace(/[^A-Za-z0-9-'\s\.,]/gim,'');
  }

  static titleize(sentence)
  {
    
  }
}