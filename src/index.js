
    let oneNine = function (number) {

        switch (number) {
            case 0:
                return ''
            case 1:
                return 'one';
            case 2:
                return 'two';
            case 3:
                return 'three';
            case 4:
                return 'four';
            case 5:
                return 'five';
            case 6:
                return 'six';
            case 7:
                return 'seven';
            case 8:
                return 'eight';
            case 9:
                return 'nine';
        }
        };
        
        let tenNineteen = function (number) {
        
            switch (number) {
                case 10:
                    return 'ten'
                case 11:
                    return 'eleven'
                case 12:
                    return 'twelve';
                case 13:
                    return 'thirteen';
                case 14:
                    return 'fourteen';
                case 15:
                    return 'fifteen';
                case 16:
                    return 'sixteen';
                case 17:
                    return 'seventeen';
                case 18:
                    return 'eighteen';
                case 19:
                    return 'nineteen';
            }
        };
        
            let decimal = function (number) {
        
                switch (number) {
                    case 2:
                        return 'twenty';
                    case 3:
                        return 'thirty'
                    case 4:
                        return 'forty';
                    case 5:
                        return 'fifty';
                    case 6:
                        return 'sixty';
                    case 7:
                        return 'seventy';
                    case 8:
                        return 'eighty';
                    case 9:
                        return 'ninety';
                }
                };
         let hundred = function (number) {
        
                switch (number) {
                    case 1:
                        return 'one hundred';
                    case 2:
                        return 'two hundred';
                    case 3:
                        return 'three hundred';
                    case 4:
                        return 'four hundred';
                    case 5:
                        return 'five hundred';
                    case 6:
                        return 'six hundred';
                    case 7:
                        return 'seven hundred';
                    case 8:
                        return 'eight hundred';
                    case 9:
                        return 'nine hundred';
                    
                    
                }
                };
        module.exports = function toReadable (number) {
            if (number === 0) {
                return 'zero'
            }
        
            if (number  < 10) {
                return oneNine(number);
            }
        
            if (number < 20) {
                return tenNineteen(number);
            }
        
            if (number <= 99) {
                if(number % 10 === 0) {
                    return (decimal(Math.floor(number / 10)));
            }
                return (decimal(Math.floor(number / 10) ) + ' ' + oneNine(number % 10));
            }
        
            if (number <= 999) {
                if(number % 100 ===0) {
                    return (hundred(Math.floor(number / 100)));
                }
        
                if(number % 100 <= 9) {
                    return (hundred(Math.floor(number / 100)) + ' ' + oneNine(Math.floor(number % 10)));
                }
                if(number % 100 <= 19 && number % 100 >= 10) {
                    return (hundred(Math.floor(number / 100)) + ' ' + tenNineteen(number % 100));
                }
                if(number % 10 === 0) {
                    return (hundred(Math.floor(number / 100)) + ' ' + decimal(Math.floor((number % 100)/10)))
                }
                if(number % 100 === 10) {
                    return ((hundred(Math.floor(number/100))) + ' ' + tenNineteen(number % 100))
                }
                return (hundred(Math.floor(number / 100)) + ' ' + decimal((Math.floor((number % 100) / 10))) + ' ' + oneNine(number % 10));
            }
        
        
        
        }
        
