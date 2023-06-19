var genWordlist = function(n, letters) {
    var results = [];
    
    var helper = function(cache) {
      for (var i = 0; i < letters.length; i++) {
        cache += letters[i];
        if (cache.length === n) {
          results.push(cache);
        } else {
          helper(cache);
        }
        cache = cache.slice(0, -1);
      }
    }
    helper("");
    return results;
  };
  genWordlist(6, "a")

