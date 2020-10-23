def drawimage(a):
    if a % 2 == 0:
        print('Parameter harus ganjil')
        print('sedangkan anda memasukkan angka',a,'yang merupakan bilangan genap')

    else:
        for i in range(a):
            for j in range(a):
                if i == 0 or i == (a-1):
                    if j == 0 or j == (a-1) or j == int(a/2):
                        print('*',end=' ')
                    else:
                        print('#',end=' ')

                elif i == int(a/2):
                    if j == int(a/2):
                        print('#',end=' ')
                    else:
                        print('*',end=' ')
                else:
                    if j == int(a/2):
                        print('*',end=' ')
                    else:
                        print('#',end=' ')
            print('\n')

drawimage(8)
