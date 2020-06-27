const data = [7,0,8,1,9,2,3,4,5,6,20,12,35,11,17,9,58,23,69,21];

console.log('Data awal\t:',data);

for(i = 0; i < data.length; i++){
    for(j = 0; j < (data.length - i - 1);j++){
        if(data[j] > data[j+1]){
            [data[j],data[j+1]]=[data[j+1],data[j]];
        }
    }
}

console.log('Data akhir\t:',data);