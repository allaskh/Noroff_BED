let i = 1;
while (true){
    if (i>11){
        break;
    }
    if (i%2==0 || i==5){
        i++;
        continue;
    }
    console.log(i);
    i++;
}