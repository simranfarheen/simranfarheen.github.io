---
title: 'Pointers and 2-D Arrays in C/C++'
description: 'A technical blog explaining pointers and 2-D Arrays in C/C++'
pubDate: 'Jul 10 2017'
---


Pointers are an integral part of many data structures that we implement and use in C and C++. This post highlights the relation that exists between pointers and 2-Dimensional Arrays or Matrices.

Suppose, I declare a matrix **a** consisting of 2 rows and 3 columns as follows:

```int a[2][3];```

This tells the compiler to allocate space for the matrix **a** which stores data elements of the type int in the computer memory. In the memory, this matrix will, hence, look like the following:

![alt text](./public/arrays_1.png "Memory allocation diagram of an array")

As per the above representation, two things come into picture:
1. The data elements are stored in the memory sequentially and in the row-major order.
2. We need a way to access these elements, so we need the addresses of each and every element of this matrix to be stored somewhere in the memory.

Internally, however, instead of storing each of these addresses in separate memory locations for access, only one address, i.e., the starting address of the matrix is stored.

This address allows us to access each of the individual elements of the matrix and is referred to, by the name of the matrix. It is the matrix name that enables us to access data elements present in the matrix with the help of offsets/indices/subscripts.

Usually, the element at the ith row and the jth column of a matrix can be accessed by a[i][j] but is also possible using \*(\*(a+i)+j).
But what does this even mean? The matrix name **a** is nothing but a <u>pointer to pointers</u>.

In a 1-D array say b[i], the array name **b** holds the starting address of the array, i.e., address of the first element. It, in other words, points to the first element of the array and is, thus, a pointer to the first array element.
Here, b = &(b[0]) = \*(b)

Coming back to a 2-D array, which quintessentially is an array of arrays and can be pictured as follows:

![alt text](./public/arrays_3.png "Memory allocation of a 2-D array")

Here, a[0] refers to the first row and contains the address of the first element of the zeroth row. Similarly, a[1] contains the address of the first element of the first row. a[0] and a[1] are pointers and point to the first and the second arrays of the matrix respectively. In this case too,  

a = a[0] = &a[0] = \*(a+0) = \*(a) and (a+1) = a[1] = &a[1] = \*(a+1).  

We will see why this is so.

***

Consider the below figure, here the first table contains the address, corresponding name and data value of a variable. Note that **a** contains a value that is a memory address (in hex) and is therefore a pointer.

![alt text](./public/arrays_2.png "Memory allocation of a 2-D array")

Also, note that the pointer points to a location (or contains the address of a location) which is the same as its own. Meaning, it points to itself.

Therefore, &(a) = a = 0x23fe30

Also, \*(a) = 0x23fe30

When we dereference a we get the value of **a** which is 0x23fe30. When we further dereference this memory location, we get the value stored there, which is 10 in the above case. Note that on dereferencing 0x23fe30 we get 10 from the second table (second dereferencing) and not 0x23fe30 again (from the first table).

Now, the values that \*(\*(a+i)+j) takes becomes clearer.

![alt text](./public/arrays_4.png "Memory allocation of a 2-D array")

On performing \*(a+i), we add the address of a with the total bytes occupied by the array(pointer) that a is pointing to, one time (as specified as the value of i). 

So, add 0x23fe30 and i x (size of the type) x (number of columns or number of elements in the *i*th array). 

If i=1, then,  
=> (0x23fe30+1) x (4 for int) x (3)= 0x23fe3c (skipping one entire array)

This gives the address of a[1] array and we see that : \*(a+1) = \*(&a[1]) = a[1]

In the next step we add j to the above obtained value, so if j=2  
=> (0x23fe3c+2) x (4 for int) = 0x23fe44

Since, \*(a+i) points to the location 0x23fe3c which holds an integer pointer, \*(a+i) is an integer pointer and addition with j would mean adding the total number of bytes occupied by the type \*(a+i) is pointing to with the memory address contained in \*(a+i).

This yields the memory location 0x23fe44 which is the location of the a[1][2] element and \*(\*(a+i)+j) = value stored at 0x23fe44.

This is how 2-D arrays are allocated and accessed in memory.

Hope you enjoyed reading this article. For suggestions or feedback, please write to me at simranfarheen@hotmail.com.

