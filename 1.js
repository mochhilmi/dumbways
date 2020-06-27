const hitungbarang = (i,j) => {
    i = i.toUpperCase();
    if(i == 'A'){
        harga = 4550;
    }else if(i == 'B'){
        harga = 5330;
    }else{
        console.log('Kualitas barang yang anda masukkan salah');
    }

    let potongan = 0;
    let total = j * harga;
    if(i == 'A' && j > 13){
        potongan = 231 * j;
    }else if(i == 'B' && j > 7){
        potongan = total * 23 /100;
    }
    console.log(
        'Total harga barang\t:',total,
        '\nPotongan\t\t:',potongan,
        '\nTotal yang harus dibayar:',total - potongan
    );
};

hitungbarang('a',14);