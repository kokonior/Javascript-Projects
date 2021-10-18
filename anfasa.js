
<script>
 
      // JavaScript program to print the
      // arrow pattern
 
      // Function to print pattern
      function print_arrow(n)
      {
        // for printing upper part
        // of the arrow
        for (var i = 1; i < n; i++)
        {
          // To give space before printing
          // stars in upper part of arrow
          for (var j = 0; j < i; j++)
          {
            document.write("  ");
          }
 
          // To print stars in upper
          // part of the arrow
          for (var k = 0; k < i; k++) {
            document.write("*");
          }
          document.write("<br>");
        }
 
        // for printing lower part
        // of the arrow
        for (var i = 0; i < n; i++)
        {
          // To give space before printing
          // stars in lower part of arrow
          for (var j = 0; j < n - i; j++)
          {
            document.write("  ");
          }
 
          // To print stars in lower
          // part of the arrow
          for (var k = 0; k < n - i; k++)
          {
            document.write("*");
          }
          document.write("<br>");
        }
      }
 
      // Driver code
       
      // taking input from user
      var n = 5;
 
      // function calling
      print_arrow(n);
       
</script>
