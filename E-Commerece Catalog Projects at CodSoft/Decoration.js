 <script>
    function addToCart(product) {
      console.log('Product added:', product);
    }

    function buyProduct(productName) {
      alert(productName + ' purchase initiated.');
    }

    function enterAddress(productName) {
      const address = prompt('Enter shipping address for ' + productName);
      if (address) alert('Address saved: ' + address);
    }

    function proceedPayment(productName) {
      alert('Processing payment for ' + productName);
    }
  </script>
</body>
</html>