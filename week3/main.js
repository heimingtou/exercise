let a=5
let b=10;
let dem =0;
let kt;
function ktNguyenTo(a)
{
for(let i=1;i<a;i++)
{
    if(a%i==0)
        dem++;
}
if(dem>2)
   {
    return false
   }
else
   {
    return true;}
}
ktNguyenTo(a);
function tinhTong(b){
    let s=0;
    for(let i=1;i<=b;i++)
        s+=i;
    return s;
}
console.log(tinhTong(b));
let arr=[1,2,5,4,-9,10,6,3,7,8,-7];
    let newArr = arr.filter
    (
        x=> x%2==0

    );
console.log(newArr);
function maxArr(arr){
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max)
            max=arr[i];
    }
    return max;
}
console.log(maxArr(arr));
let positiveArr=arr.filter(x => x>0);
console.log(positiveArr);