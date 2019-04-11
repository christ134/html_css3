var num=541;


var revno=palindrome(num)

function palindrome(num)
{
    var rem=0;
    var rev=0;
        while(num>0);
        {
            rem=num%10;
            rev=rev+rem*10;
            num=parseInt(x/10);
           
        } return rev;
}

console.log(revno);