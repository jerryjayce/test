let unsorted_words = ['blal', 'tset', 'loev', 'bset', 'psas'];

function hasWord(word) {
    //split, sort alphabetically, make lowercase, then compare

    let has_word = false;
    let sorted_word = word.split('').sort().join('').toLowerCase();


    for (let i = 0; i < unsorted_words.length; i++) {

        //check if length of word is the same length with current loop in other to shorten search
        if (word.length === unsorted_words[i].length) {

            let sorted_array_word = unsorted_words[i].split('').sort().join('').toLowerCase();

            if (sorted_word.localeCompare(sorted_array_word, 'en', { sensitivity: 'base' }) === 0) {
                has_word = true;
                console.log(sorted_word,  "===", sorted_array_word)
            }
        } else {
            break
        }
    }


    return has_word;

}

let word_match = hasWord('bste');
console.log(word_match);