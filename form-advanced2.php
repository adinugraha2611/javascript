<!doctype html>
<html>
<body style="background-color:black; color:white;">
<form action="form-data3.php" method="post" target="_self">
* required field.<br>
Name: <input type="text" name="name" required>*<br>
E-mail: <input type="email" name="email" required>*<br>
Website: <input type="url" name="website"><br>
Comment:<br>
<textarea name="comment" rows="3" cols="30">Type Your Comments Here!</textarea><br>
Gender: <input type="radio" name="gender" value="Male" >Male
<input type="radio" name="gender" value="Female" >Female
<input type="radio" name="gender" value="Other" >Other<br>
<input type="submit" name="submit">
</form>
</body>
</html>