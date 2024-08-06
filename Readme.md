06-08-2024 | 07:52 IST
-----------------------

a. Javascript is the programming language of the web.
b. Javascript often written on the end of the body tag. [inside]
There are 4 ways to get output in javascript:
1. innerHTML: 
====================================================
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My First Paragraph</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>

</body>
</html>
====================================================
Output: On the webpage we can see the paragraph mentioning 11
2. document.write():
====================================================
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
document.write(5 + 6);
</script>

</body>
</html>
====================================================
Output: On the webpage we can see the paragraph mentioning 11
3. alert()
Output: On the popup it will show the output.
4. console.log():
Output: on the console we will able to see the output.

