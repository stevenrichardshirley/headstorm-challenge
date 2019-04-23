var formInput = document.querySelectorAll('#name, #email, #message');

    document.querySelector('form').addEventListener('submit', function (e) {
      formInput.forEach(function(input){
        console.log(input.value);
      })
        e.preventDefault();
    });
