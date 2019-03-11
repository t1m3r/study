if(10 < 1) {
    console.log('first case');
} else if (10 > 1) {
    console.log('second case');
}  else if(3 > 2){
    console.log('unexpected case')
}else {
    console.log('third case')
}

var checkString = 'abc';
    
switch(checkString) {
    case 'ab':
    console.log('1 case');
    break;
    case 'ba':
    console.log('2 case');
    break;
    case 'abc':
    console.log('3 case');
    break;
    default:
    console.log('4 case');
    break;
}

if(checkString == 'ab') {
    console.log('1 case');
}else if(checkString == 'ba') {
    console.log('2 case');
}else if(checkString == 'abc') {
    console.log('3 case');
}else {
    console.log('4 case');
}