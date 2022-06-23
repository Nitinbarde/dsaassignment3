// que 1 
// Implement Binary Search 

function binarySearch(arr, l, r, x){
    if (r >= l) {
        let mid = l + Math.floor((r - l) / 2);
 
      
        if (arr[mid] == x)
            return mid;
 
        if (arr[mid] > x)
            return binarySearch(arr, l, mid - 1, x);
            return binarySearch(arr, mid + 1, r, x);
        }
        return -1;
    }
    let arr = [ 2, 3, 4, 10, 40 ];
    let x = 10;
    let n = arr.length
    let result = binarySearch(arr, 0, n - 1, x);
    (result == -1) ? console.log( "Element is not present in array")
     : console.log("Element is present at index " +result);


    //  que 2 
    // Implement Merge Sort 
  
    function merge(arr, l, m, r)
    {
        var n1 = m - l + 1;
        var n2 = r - m;
     
        var L = new Array(n1);
        var R = new Array(n2);
     
        for (var i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (var j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];
  
        var i = 0;
     
    
        var j = 0;
     
 
        var k = l;
     
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            }
            else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
     
      
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
     
   
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }
  
    function mergeSort(arr,l, r){
        if(l>=r){
            return;
        }
        var m =l+ parseInt((r-l)/2);
        mergeSort(arr,l,m);
        mergeSort(arr,m+1,r);
        merge(arr,l,m,r);
    }
     
    
    function printArray( A, size)
    {
        for (var i = 0; i < size; i++)
           console.log(  A[i] + " ");
    }
     
     
    var arr = [ 12, 11, 13, 5, 6, 7 ];
        var arr_size = arr.length;
     
        console.log(  "Given array is <br>");
        printArray(arr, arr_size);
     
        mergeSort(arr, 0, arr_size - 1);
     
        console.log( "<br>Sorted array is <br>");
        printArray(arr, arr_size);


        // que 3 
        // Implement Quick Sort 



        function swap(arr, i, j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        function partition(arr, low, high) {
         
            let pivot = arr[high];
        
            let i = (low - 1);
         
            for (let j = low; j <= high - 1; j++) {
         
                if (arr[j] < pivot) {
         
                    i++;
                    swap(arr, i, j);
                }
            }
            swap(arr, i + 1, high);
            return (i + 1);
        }
       
        function quickSort(arr, low, high) {
            if (low < high) {
         
                let pi = partition(arr, low, high);
         
                quickSort(arr, low, pi - 1);
                quickSort(arr, pi + 1, high);
            }
        }
         
       
        function printArray(arr, size) {
            for (let i = 0; i < size; i++)
                console.log(arr[i] + " ");
         
            console.log("<br>");
        }
         

         
        let arr = [10, 7, 8, 9, 1, 5];
        let n = arr.length;
         
        quickSort(arr, 0, n - 1);
        console.log("Sorted array: <br>");
        printArray(arr, n);

        // que 4 
        // Implement Insertion Sort 
        function insertionSort(arr, n) 
     { 
    let i, key, j; 
    for (i = 1; i < n; i++)
    { 
        key = arr[i]; 
        j = i - 1; 
   
      
        while (j >= 0 && arr[j] > key)
        { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 
        arr[j + 1] = key; 
    } 
      } 

function printArray(arr, n) 
{ 
    let i; 
    for (i = 0; i < n; i++) 
        console.log(arr[i] + " "); 
    console.log("<br>");
} 
   

    let arr = [12, 11, 13, 5, 6 ]; 
    let n = arr.length; 
   
    insertionSort(arr, n); 
    printArray(arr, n); 


    // que 5 
     

                
     
 
      
 
 