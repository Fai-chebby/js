#include<stdio.h> 
2. void main () 
3. { 
4. int i,j, k,temp; 
5. int a[10] = { 10, 9, 7, 101, 23, 44, 12, 78, 34, 23}; 
6. printf("\nprinting sorted elements...\n"); 
7. for(k=1; k<10; k++) 
8. { 
9. temp = a[k]; 
10. j= k-1; 
11. while(j>=0 && temp <= a[j]) 
12. { 
13. a[j+1] = a[j]; 
14. j = j-1; 
15. } 
16. a[j+1] = temp; 
17. } 
18. for(i=0;i<10;i++) 
19. { 
20. printf("\n%d\n",a[i]); 
21. }
22. }